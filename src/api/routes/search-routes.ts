import Elysia from "elysia";

const tags = ["Search"];

export default (app: Elysia) =>
  app.group("/search", (api) =>
    api
      .get("/recipe", () => "Search Recipe", {
        detail: {
          summary: "Busca um objeto do tipo receita",
          tags: [...tags, "Recipe"],
        },
      })
      .get("/ingredient", () => "Search Ingredient", {
        detail: {
          summary: "Busca um objeto do tipo ingrediente",
          tags: [...tags, "Ingredient"],
        },
      })
      .get("/groceries", () => "Search Groceries List", {
        detail: {
          summary: "Busca um objeto do tipo lista de compras",
          tags: [...tags, "GroceriesList"],
        },
      })
  );
