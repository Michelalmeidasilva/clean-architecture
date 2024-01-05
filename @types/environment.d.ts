export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      MONGODB_CONNECTION_URL: string;
    }
  }
}
