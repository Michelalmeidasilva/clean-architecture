import Elysia from "elysia";
import { createSwaggerDocs } from "../config";
import { IngredientsController } from "@api/controllers/IngredientsController";

import {
  CreateIngredientBodySchema,
  GetIngredientQuerySchema,
  UpdateIngredientBodySchema,
  DeleteIngredientQuerySchema,
} from "@api/schemas/IngredientSchemas";

const tags = ["Ingredient"];

const swaggerRecipeDocs = createSwaggerDocs({
  delete: {
    detail: { summary: `Deleta um objeto do tipo ${tags[0]}`, tags },
  },
  get: {
    detail: { summary: `Retorna um objeto do tipo ${tags[0]}`, tags },
  },
  post: {
    detail: { summary: `Cria um objeto do tipo ${tags[0]}`, tags },
  },
  put: {
    detail: { summary: `Atualiza um objeto do tipo ${tags[0]}`, tags },
  },
});

export default (app: Elysia) =>
  app.group("/ingredients", (api) =>
    api
      .get("/", IngredientsController.getIngredients, {
        query: GetIngredientQuerySchema,
        detail: swaggerRecipeDocs["get"].detail,
      })
      .post("/", IngredientsController.createIngredient, {
        body: CreateIngredientBodySchema,
        detail: swaggerRecipeDocs["post"].detail,
      })
      .put("/", IngredientsController.updateIngredient, {
        body: UpdateIngredientBodySchema,
        detail: swaggerRecipeDocs["put"].detail,
      })
      .delete("/", IngredientsController.deleteIngredient, {
        query: DeleteIngredientQuerySchema,
        detail: swaggerRecipeDocs["delete"].detail,
      })
  );
