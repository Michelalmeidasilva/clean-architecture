import { Elysia } from "elysia";
import { setupRoutes, setupSwagger } from "./config";

import { MongoHelper } from "@infra/database/mongo/mongo-helper";
import env from "@main/config/env";

const setupServer = async () => {
  const app = new Elysia();

  setupSwagger(app);
  await setupRoutes(app);

  return app;
};

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = await setupServer();

    app.listen(3000, () => console.log("listening at 3000"));
  })
  .catch((err) => {
    console.log("err", err);
  });
