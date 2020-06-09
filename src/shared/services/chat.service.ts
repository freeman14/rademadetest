import { ApiService } from './api.service';

export const ChatService = {
  getConversations: (params: any) => {
    return ApiService.get('/conversations', params);
  },
};
