import {
  CHANGE_THEME,
} from './mutation-types.js';

export const state = () => ({
  theme: 'light',
});

export const getters = {
  theme: state => state.theme,
};

export const mutations = {
  [CHANGE_THEME](state, theme) {
    state.theme = theme;
    console.log(CHANGE_THEME);
  },
};
