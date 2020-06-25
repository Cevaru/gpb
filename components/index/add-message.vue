<template>
  <div class="flex items-center h-12">
    <input
      class="
        focus:outline-none border border-gray rounded py-2 px-4 bg-white w-full mr-4
        dark:bg-indigo-900 light:bg-white
        dark:text-white light:text-gray-800
        transition duration-200
      "
      type="text"
      placeholder="О чём вы думаете"
      v-model.trim="message"
      @keyup.enter="addMessage"
    >
    <button
      class="
        focus:outline-none border border-gray rounded py-2 px-4 text-white
        transition duration-200
        light:bg-green-400
        dark:bg-blue-900
      "
      @click="addMessage"
    >Поделиться</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      message: '',
    };
  },
  computed: {
    ...mapGetters('user', [
      'user'
    ]),
  },
  methods: {
    ...mapActions('post', [
      'postMessage',
    ]),
    addMessage() {
      if (this.message) {
        this.postMessage({message: this.message, userId: this.user.id}).then(() => {
          this.message = '';
        });
      }
    },
  },
};
</script>