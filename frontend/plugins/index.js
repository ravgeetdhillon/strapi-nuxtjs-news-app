import Vue from 'vue';
import DOMPurify from 'dompurify';

Vue.mixin({
  methods: {
    sanitizeHtml(value) {
      return DOMPurify.sanitize(value);
    },
  },
});
