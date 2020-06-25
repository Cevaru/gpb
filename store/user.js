import { v4 as uuidv4 } from 'uuid';
import {
  SAVE_CURRENT_USER,
} from './mutation-types.js';

export const state = () => ({
  user: null,
});

export const getters = {
  user: state => state.user,
};

export const mutations = {
  [SAVE_CURRENT_USER](state, user) {
    console.log(user);
    state.user = user;
  },
};

export const actions = {
  async createRandomUser({ commit, state }, id = uuidv4()) {
    try {
      const randomUser = await fetch(`https://randomuser.me/api/?seed=${id}`)
        .then(res => res.json())
        .then(res => res.results[0])
      randomUser.id = id;
      // при каждой перезагрузке страницы "заходим" под случайным пользователем
      if (!state.user) commit(SAVE_CURRENT_USER, randomUser);
      return randomUser;
    } catch (err) { console.log(err) }
  },
};
