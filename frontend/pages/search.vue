<template>
  <section class="py-5">
    <b-container>
      <b-row>
        <b-col lg="7" class="mx-lg-auto">
          <nuxt-link to="/">Back</nuxt-link>
          <br /><br />
          <h1 class="mb-5 border-bottom">Search News</h1>
          <div class="d-flex mb-5">
            <b-form-input
              v-model="searchQuery"
              type="search"
              placeholder="Search"
              class="mr-3"
            ></b-form-input>
            <b-btn @click="searchItems">Search</b-btn>
          </div>
          <div v-if="!newsItems">Nothing Found</div>
          <div
            v-for="(newsItem, index) in newsItems"
            v-else
            :key="index"
            class="mb-5"
          >
            <news-item :item="newsItem"></news-item>
          </div>
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
      searchQuery: null,
    };
  },
  methods: {
    async searchItems() {
      this.newsItems = await this.$strapi.$newsitems.find({
        _q: this.searchQuery,
      });
    },
  },
};
</script>
