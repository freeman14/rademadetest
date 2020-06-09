import axios from 'axios';

const baseInstance = axios.create({ baseURL: process.env.BASE_API });

export const ApiService = {
  get: (path: string, params = {}) => {
    return baseInstance.get(path, { params });
  },
  post: (path: string, data: any) => {
    return baseInstance.post(path, { data });
  },
  patch: (path: string, data: any) => {
    return baseInstance.patch(path, { data });
  },
  put: (path: string, data: any) => {
    return baseInstance.put(path, { data });
  },
  delete: (path: string, params: any) => {
    return baseInstance.delete(path, { params });
  },
};
