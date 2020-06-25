<template>
  <div class="flex py-2 dark:text-white light:text-gray-800 transition duration-200">
    <user-avatar size="medium" :user="user"></user-avatar>
    <div class="ml-2 text-sm ">{{ comment.message }}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

import UserAvatar from '@/components/index/user/avatar.vue';

export default {
  components: {
    UserAvatar,
  },
  props: {
    comment: {
      type: Object,
      default() {
        return {
          id: uuidv4(),
          userId: uuidv4(),
          postId: uuidv4(),
          message: '',
        };
      },
    },
  },
  data() {
    return {
      user: null,
    }
  },
  methods: {
    ...mapActions('user', [
      'createRandomUser',
    ]),
  },
  async mounted() {
    const user = await this.createRandomUser(this.comment.userId);
    this.user = user;
  }
};
</script>