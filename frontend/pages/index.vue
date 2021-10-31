<template>
  <section class="py-5">
    <b-container>
      <b-row>
        <b-col lg="7">
          <div v-if="!newsItems">Loading...</div>
          <div v-else>
            <h1 class="mb-5 border-bottom">News</h1>
            <nuxt-link to="/search">Search</nuxt-link>
            <br /><br />
            <div
              v-for="(newsItem, index) in newsItems"
              :key="index"
              class="mb-5"
            >
              <news-item :item="newsItem"></news-item>
            </div>
          </div>
        </b-col>
        <b-col lg="1"></b-col>
        <b-col lg="4">
          <SubscribeBox />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      newsItems: null,
    };
  },
  async created() {
    this.newsItems = await this.$strapi.$newsitems.find();
  },
};
</script>
