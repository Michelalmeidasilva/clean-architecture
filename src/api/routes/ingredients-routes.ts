import Elysia from "elysia";
import { createSwaggerDocs } from "../config";
import { IngredientsController } from "@api/controllers/IngredientsController";
import { CreateIngredientSchemaValidator } from "@api/schemas/CreateIngredientSchema";

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
      .get("/", IngredientsController.getIngredients)
      .post("/", IngredientsController.createIngredient, {
        body: CreateIngredientSchemaValidator,
        detail: swaggerRecipeDocs["post"].detail,
      })
      .put("", () => "Update Ingredients", swaggerRecipeDocs["put"])
      .delete("", () => "Delete Ingredients", swaggerRecipeDocs["delete"])
  );
