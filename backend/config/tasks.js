'use strict';

/**
 * List of all cron job tasks done by the application.
 */

async function updateFeed() {
  return await strapi.config.feedUpdater.main();
}

module.exports = {
  updateFeed,
};
