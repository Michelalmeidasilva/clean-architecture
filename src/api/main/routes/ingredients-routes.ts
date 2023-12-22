import Elysia from "elysia";

export default (app: Elysia) =>
  app.group("/ingredients", (api) =>
    api
      .get("/", () => "Get Ingredients")
      .post("/", () => "Create Ingredient")
      .put("/", () => "Update Ingredient")
      .delete("/", () => "Delete Ingredient")
  );
