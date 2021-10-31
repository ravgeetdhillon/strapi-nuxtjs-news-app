<template>
  <div>
    <b-badge v-if="item.sponsored" variant="info" class="mb-2">
      Sponsored
    </b-badge>
    <nuxt-link :to="`/newsitems/${item.id}`" class="text-dark">
      <h2 class="h4">{{ item.title }}</h2>
    </nuxt-link>
    <p
      class="mb-1 one-liner text-muted"
      v-html="sanitizeHtml(item.preview)"
    ></p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
