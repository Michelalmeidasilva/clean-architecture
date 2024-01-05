import Elysia from "elysia";
import { createSwaggerDocs } from "../config";

const tags = ["GroceriesList"];

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

export default (app: Elysia) => {
  app.group("/groceries-list", (api) =>
    api
      .get("/", () => "Get Groceries list", swaggerRecipeDocs["get"])
      .post("/", () => "Create grocery list", swaggerRecipeDocs["post"])
      .put("/", () => "Update grocery list", swaggerRecipeDocs["put"])
      .delete("/", () => "Delete grocery list", swaggerRecipeDocs["delete"])
  );
};
