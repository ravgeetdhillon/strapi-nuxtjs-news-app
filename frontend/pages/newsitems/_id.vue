<template>
  <section class="py-5">
    <b-container>
      <b-row>
        <b-col lg="7" class="mx-lg-auto">
          <div v-if="!newsItem">Loading...</div>
          <div v-else>
            <nuxt-link to="/">Back</nuxt-link>
            <br /><br />
            <b-alert v-if="newsItem.sponsored" variant="info" show>
              This is a Sponsored post.
            </b-alert>
            <h1 class="mb-4">{{ newsItem.title }}</h1>
            <div class="small mb-4">
              <span v-if="newsItem.creator.trim().length > 0">
                Written by <b>{{ newsItem.creator }}</b>
                <br />
              </span>
              <span>
                Published on
                {{ new Date(newsItem.published_at).toLocaleDateString() }}
              </span>
            </div>
            <p v-html="sanitizeHtml(newsItem.preview)"></p>
            <a :href="newsItem.link" target="_blank">
              Read on Original Blog
              <ExternalIcon />
            </a>
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
      newsItem: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.newsItem = await this.$strapi.$newsitems.findOne(id);
  },
};
</script>
