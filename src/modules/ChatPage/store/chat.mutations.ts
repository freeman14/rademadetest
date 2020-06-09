import { MutationTree } from 'vuex';

export const ChatMutations: MutationTree<any> = {
  setConversations(state, conversation): void {
    state.conversations = conversation;
  },
};
