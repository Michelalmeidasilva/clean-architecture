import Elysia from "elysia";

import { createSwaggerDocs } from "../config/swagger";

const tags = ["Recipe"];

const swaggerRecipeDocs = createSwaggerDocs({
  delete: {
    detail: { summary: "Deleta um objeto do tipo receita", tags },
  },
  get: {
    detail: { summary: "Retorna um objeto do tipo receita", tags },
  },
  post: {
    detail: { summary: "Cria um objeto do tipo receita", tags },
  },
  put: {
    detail: { summary: "Atualiza um objeto do tipo receita", tags },
  },
});

console.log(JSON.stringify(swaggerRecipeDocs, null, 2));

export default (app: Elysia) =>
  app.group("/recipe", (api) =>
    api
      .get("/", () => "Get Recipe", swaggerRecipeDocs["get"])
      .post("/", () => "Create Recipe", swaggerRecipeDocs["post"])
      .put("/", () => "Update Recipe", swaggerRecipeDocs["put"])
      .delete("/", () => "Delete Recipe", swaggerRecipeDocs["delete"])
  );
