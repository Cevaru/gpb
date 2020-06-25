<template>
  <div class="pt-10">
    <theme-change></theme-change>
    <div class="flex">
      <div class="order-1 w-4/6 pr-4">
        <add-message></add-message>
        <post-list></post-list>
      </div>
      <popular-post
        class="order-2 w-2/6 pl-4"
      ></popular-post>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

import ThemeChange from '@/components/index/theme-change.vue';
import AddMessage from '@/components/index/add-message.vue';
import PostList from '@/components/index/post/list.vue';
import PopularPost from '@/components/index/popular-post.vue';

export default {
  components: {
    ThemeChange,
    AddMessage,
    PostList,
    PopularPost,
  },
  mounted() {
    this.createRandomUser();
    const newMessageInterval = Math.round(Math.random() * 25 + 5); // слишком долго ждать
    setInterval(this.addRandomComment, 3000);
  },
  computed: {
    ...mapGetters('post', [
      'getRadomPost',
    ]),
  },
  methods: {
    ...mapActions('comment', [
      'postComment',
    ]),
    ...mapActions('user', [
      'createRandomUser',
    ]),
    async addRandomComment() {
      const postId = this.getRadomPost()?.id;

      if (postId) {
        const message = await fetch('https://fish-text.ru/get?type=title&number=1&format=json')
          .then(res => res.json())
          .then(res => res.text)
          .catch(err => console.log(err));
        const comment = {
          message,
          postId,
          userId: uuidv4(),
        };
        this.postComment(comment);
      }
    },
  },
};
</script>
