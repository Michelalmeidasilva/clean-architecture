import { Elysia } from 'elysia';
import { setupRoutes, setupSwagger } from './config';
import { Database } from 'infra/database/database';
import { config as setupDotenv } from 'dotenv';

const setupDatabase = () => {
  Database();
};

const setupApp = () => {
  const app = new Elysia();
  setupDotenv();
  setupDatabase();
  setupRoutes(app);
  setupSwagger(app);

  return app;
};

export const runApp = (): Elysia => {
  const app = setupApp();
  app.listen(3000, () => console.log('listen at 3000'));
  return app;
};
