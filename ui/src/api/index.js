import { DefaultApi } from 'algorithms_api';

const api = new DefaultApi();

// if the env is not production assume that the app has been started
// in dev mode and assume that the API is running locally
if (process.env.NODE_ENV !== 'production') {
  api.apiClient.basePath = 'http://localhost:3001';
}

export default api;
