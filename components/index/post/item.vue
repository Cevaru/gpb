<template>
  <div>
    <div class="flex mt-4 border border-gray rounded py-2 px-4 relative dark:text-white light:text-gray-800 transition duration-200">
      <user-avatar size="large" :user="user"></user-avatar>
      <div class="ml-4" v-html="insertImgTag(post.message)"></div>
      <div class="absolute top-0 right-0 py-1 px-2 text-xs">{{ post.date | formatDate }}</div>
    </div>
    <div
      class="pl-20 pt-2"
      v-if="comments"
    >
      <!-- можно менять кол-во комментариев под постом -->
      <comment-item
        v-for="comment in comments(post.id, 3)"
        :key="comment.id"
        :comment="comment"
      ></comment-item>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

import UserAvatar from '@/components/index/user/avatar.vue';
import CommentItem from '@/components/index/comment/item.vue';

// регулярное выражение для поиска ссылки на картинку
const imgLinkExp = new RegExp(/(https?:\/\/[\w\.\/]+(\.png|\.gif|\.jpg|\.jpeg){1})/, 'g');

export default {
  components: {
    UserAvatar,
    CommentItem,
  },
  props: {
    post: {
      type: Object,
      default() {
        return {
          id: uuidv4(),
          userId: uuidv4(),
          message: 'Message',
          date: Date.now(),
        };
      },
    },
  },
  computed: {
    ...mapGetters('comment', {
      comments: 'getCommentsByPostId',
    }),
    ...mapGetters('user', [
      'user',
    ]),
  },
  filters: {
    /**
     * форматирование времени для современных браузером
     * но можно использовать moment.js (решил не добавлять лишних зависимостей)
     */
    formatDate(val) {
      return new Intl.DateTimeFormat('ru-RU', {
        day: 'numeric',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(val); 
    },
  },
  methods: {
    insertImgTag(str) {
      if (imgLinkExp.test(str)) return str.replace(imgLinkExp, `<img class="max-h-20 inline cursor-pointer" src="$1">`);
      return str;
    },
  },
};
</script>