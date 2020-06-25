<template>
  <div class="dark:text-white light:text-gray-800 transition duration-200">
    <div class="text-xl h-12 flex items-center">Самые часто обсуждаемые посты</div>
    <div class="mt-4" v-if="comments">
      <div
        class="flex items-center mb-2"
        v-for="comment in comments"
        :key="comment[0]"
      >
        <div class="mr-4 border rounded-full w-10 h-10 flex items-center justify-center">{{ comment[1] }}</div>
        <div>{{ getPostById(comment[0]) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('comment', [
      'getMostPopularComments',
    ]),
    ...mapGetters('post', [
      'getPostById',
    ]),
    comments() {
      /**
       * можно менять кол-во популярный комментариев
       * по умолчанию 3
       */
      return this.getMostPopularComments();
    },
  },
};
</script>