export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      MONGODB_CONNECTION_URL: string;
      MONGODB_DATABASE_PRODUCTION: string;
      MONGODB_DATABASE_STAGE: string;
      MONGODB_USERNAME: string;
      MONGODB_PASSWORD: string;
    }
  }
}
