import { v4 as uuidv4 } from 'uuid';
import {
  ADD_NEW_COMMENT,
} from './mutation-types.js';

const postComment = ({ message, userId, postId }) => ({
  id: uuidv4(),
  userId,
  postId,
  message,
});

export const state = () => ({
  list: [],
});

export const getters = {
  getCommentsByPostId: state => (postId, count = 3) => state.list.filter(comment => comment.postId === postId).slice().reverse().slice(0, count), 
  /**
   * подсчитывает кол-во комментариев с одинаковым postId
   * возвращает необходимое количесество самых популярных постов
   * не самый оптимальный споосв, но, думаю, это на бэкэнде должно считаться
   */
  getMostPopularComments: state => (count = 3) => {
    const popularity = state.list.reduce((acc, item) => {
      if (acc[item.postId]) acc[item.postId]++;
        else acc[item.postId] = 1;
      return acc;
    }, {});
    return Object.entries(popularity).sort((a,b) => a[1] > b[1] ? -1 : 1).slice(0, count);
  },
};

export const mutations = {
  [ADD_NEW_COMMENT](state, newComment) {
    state.list.push(newComment);
    console.log(ADD_NEW_COMMENT);
  },
};

export const actions = {
  /**
   * Добавляет рандомный комментарий
   * @param {Object} payload
   * @param {String} payload.userId - ID пользователя
   * @param {String} payload.postId - ID поста
   * @param {String} payload.message - Комментарий пользователя
   */
  async postComment({ commit }, payload) {
    const newComment = await postComment(payload);
    commit(ADD_NEW_COMMENT, newComment);
  },
};
