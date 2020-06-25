<template>
  <div class="relative group">
    <img
      class="rounded-full relative z-10 cursor-pointer"
      :class="{
        'w-12 h-12': size === 'large',
        'w-8 h-8': size === 'medium',
        'w-6 h-6': size === 'thumbnail',
      }"
      :src="userIconSrc"
      alt="User avatar"
    >
    <div
      class="
        shadow z-20 absolute bg-gray-300 border border-gray-500 hidden group-hover:block text-sm rounded whitespace-no-wrap
        transform -translate-y-full -translate-x-1/2 left-1/2 top-0 py-1 px-2 -mt-2
      "
    >{{ username }}</div>
  </div>
</template>

<script>
import userIcon from '@/static/user-icon.svg';

export default {
  props: {
    size: {
      type: String,
      default: 'large',
    },
    user: {
      type: Object,
      default() {
        return {
          name: {}
        };
      },
    },
  },
  computed: {
    userIconSrc() {
      if (this.user?.picture) return this.user.picture[this.size];
      return userIcon;
    },
    username() {
      if (this.user?.name) return `${this.user.name.first} ${this.user.name.last}`;
      return 'Anonymous';
    }
  },
};
</script>