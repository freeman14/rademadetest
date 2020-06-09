import Vue from 'vue';
import Vuex from 'vuex';

import { ChatModule } from '../modules/ChatPage/store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ChatModule,
  },
});
