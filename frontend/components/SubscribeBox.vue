<template>
  <div class="bg-light">
    <div class="p-3">
      <p class="lead font-weight-normal mb-0">Subscribe to our newsletter</p>
      <p class="text-muted">
        Get daily updates about things happening in the world of tech and
        business.
      </p>
      <div class="d-flex flex-column">
        <b-form-input
          v-model="email"
          type="email"
          placeholder="Your Email"
          class="mb-2"
        ></b-form-input>
        <b-btn @click="addSubscriber">Subscribe</b-btn>
        <p v-if="message" class="mt-3 mb-0">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      message: null,
    };
  },
  methods: {
    async addSubscriber() {
      const response = await this.$strapi.$subscribers.create({
        email: this.email,
      });
      if (response) {
        this.message = 'Thanks for subscribing!';
      }
    },
  },
};
</script>
