import createPersistedState from 'vuex-persistedstate';

/**
 * плагин для сохраниня состояния vuex в localStorage
 * автоматически востанавливает данные после обновления страницы
 */

export default ({store}) => {
  createPersistedState({
    key: 'vuex',
    paths: [
      'post.list',
      'comment.list',
    ],
  })(store);
};
