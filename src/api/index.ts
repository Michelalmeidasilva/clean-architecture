import { Elysia } from "elysia";
import { setupRoutes, setupSwagger } from "./config";

export const runApp = (): Elysia => {
  const app = new Elysia();

  setupRoutes(app);
  setupSwagger(app);

  app.listen(3000, () => console.log("listen at 3000"));
  return app;
};
