import Elysia from "elysia";
import { readdirSync } from "fs";
import { join } from "path";

export type MethodsHttp = "get" | "post" | "put" | "delete";

export const setupRoutes = (app: Elysia) => {
  readdirSync(join(import.meta.dir, "../routes")).map(async (file) => {
    if (!file.endsWith(".map")) {
      (await import(`../routes/${file}`)).default(app);
    }
  });
};
