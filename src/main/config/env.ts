export default {
  mongoUrl: process.env.MONGODB_CONNECTION_URL,
  mongoDatabase:
    process.env.NODE_ENV === "development"
      ? process.env.MONGODB_DATABASE_STAGE
      : process.env.MONGODB_DATABASE_PRODUCTION,
};
