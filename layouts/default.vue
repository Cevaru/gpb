<template>
  <div :class="theme">
    <div class="dark:bg-gray-900 light:bg-white min-h-screen transition duration-200">
      <div class="container">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'theme',
    ]),
  },
};
</script>

<style lang="postcss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  @apply text-gray-800;
}
</style>
