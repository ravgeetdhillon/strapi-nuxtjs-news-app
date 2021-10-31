'use strict';

/**
 * List of all cron job tasks done by the application.
 */

const Parser = require('rss-parser');

function diffInDays(date1, date2) {
  const difference = Math.floor(date1) - Math.floor(date2);
  return Math.floor(difference / 60 / 60 / 24);
}

async function getNewFeedItemsFrom(feedUrl) {
  const parser = new Parser();
  const rss = await parser.parseURL(feedUrl);
  const todaysDate = new Date().getTime() / 1000;
  return rss.items.filter((item) => {
    const blogPublishedDate = new Date(item.pubDate).getTime() / 1000;
    return diffInDays(todaysDate, blogPublishedDate) === 0;
  });
}

async function getFeedUrls() {
  return await strapi.services.feedsources.find({
    enabled: true,
  });
}

async function getNewFeedItems() {
  let allNewFeedItems = [];

  const feeds = await getFeedUrls();

  for (let i = 0; i < feeds.length; i++) {
    const { link } = feeds[i];
    const feedItems = await getNewFeedItemsFrom(link);
    allNewFeedItems = [...allNewFeedItems, ...feedItems];
  }

  return allNewFeedItems;
}

async function main() {
  const feedItems = await getNewFeedItems();

  for (let i = 0; i < feedItems.length; i++) {
    const item = feedItems[i];

    const newsItem = {
      title: item.title,
      preview: item.contentSnippet,
      link: item.link,
      creator: item.creator,
      sponsored: false,
    };

    await strapi.services.newsitems.create(newsItem);
  }
}

module.exports = {
  main,
};
