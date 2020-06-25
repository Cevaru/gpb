<template>
  <div>
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import PostItem from '@/components/index/post/item.vue';

export default {
  components: {
    PostItem,
  },
  computed: {
    ...mapGetters('post', {
      posts: 'list',
    }),
  },
};
</script>