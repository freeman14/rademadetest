import { ActionTree } from 'vuex';
import { ChatService } from '@/shared/services/chat.service';

export const ChatActions: ActionTree<any, any> = {
  getConversations(params) {
    return ChatService.getConversations(params);
  },
};
