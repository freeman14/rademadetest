import Vue from 'vue';
import Vuex, { Module } from 'vuex';

import { ChatActions } from './chat.actions';
import { ChatMutations } from './chat.mutations';

Vue.use(Vuex);

export const ChatModule: Module<any, any> = {
  namespaced: true,
  state: {
    conversations: null,
  },
  mutations: ChatMutations,
  actions: ChatActions,
};
