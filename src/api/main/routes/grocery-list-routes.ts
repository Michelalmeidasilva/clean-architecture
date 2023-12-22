import Elysia from "elysia";

export default (app: Elysia) =>
  app.group("/grocery-list/user", (api) =>
    api
      .get("/", () => "Get Groceries Lists by user")
      .post("/", () => "Create Groceries Lists by user")
      .put("/", () => "Update Groceries Lists by user")
      .delete("/", () => "Delete Groceries Lists by user")
  );
