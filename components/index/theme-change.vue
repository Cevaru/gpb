<template>
  <div class="flex mb-10">
    <div
      class="
        mr-4 py-1 px-2 cursor-pointer rounded border
        transition duration-200
        light:border-gray-900 light:bg-gray-900 light:text-white
        dark:text-white
      "
      @click="changeTheme('light')"
    >светлая тема</div>
    <div
      class="
        py-1 px-2 cursor-pointer rounded border
        transition duration-200
        light:border-gray-900
        dark:bg-white
      "
      @click="changeTheme('dark')"
    >темная тема</div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import { CHANGE_THEME } from '@/store/mutation-types.js';

export default {
  methods: {
    ...mapMutations([
      CHANGE_THEME,
    ]),
    changeTheme(theme) {
      this[CHANGE_THEME](theme);
    },
  },
  computed: {
    ...mapGetters([
      'theme',
    ]),
  },
};
</script>