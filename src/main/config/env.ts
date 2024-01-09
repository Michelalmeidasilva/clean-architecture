export default {
  mongoUrl: process.env.MONGODB_CONNECTION_URL,
  mongo_username: process.env.MONGODB_USERNAME,
  mongo_password: process.env.MONGODB_PASSWORD,
  mongoDatabase:
    process.env.NODE_ENV === "development"
      ? process.env.MONGODB_DATABASE_STAGE
      : process.env.MONGODB_DATABASE_PRODUCTION,
};
