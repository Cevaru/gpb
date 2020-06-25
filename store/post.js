import { v4 as uuidv4 } from 'uuid';
import {
  ADD_NEW_POST,
} from './mutation-types.js';

const postMessage = ({message, userId}) => ({
  id: uuidv4(),
  userId,
  message,
  date: Date.now(),
});

export const state = () => ({
  list: [],
});

export const getters = {
  list: state => state.list.slice().reverse(),
  getRadomPost: state => () => state.list[Math.floor(Math.random() * state.list.length)],
  getPostById: state => (postId) => state.list.find(post => post.id === postId).message,
};

export const mutations = {
  [ADD_NEW_POST](state, message) {
    state.list.push(message);
    console.log(ADD_NEW_POST);
  },
};

export const actions = {
  /**
   * @param {Object} payload
   * @param {String} payload.userId - ID пользователя
   * @param {String} payload.message - Сообщение пользователя
   */
  async postMessage({ commit }, payload) {
    const newMessage = await postMessage(payload);
    commit(ADD_NEW_POST, newMessage);
  },
};
