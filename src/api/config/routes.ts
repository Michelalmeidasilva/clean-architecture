import Elysia from "elysia";
import { readdirSync } from "fs";
import { join } from "path";

export type MethodsHttp = "get" | "post" | "put" | "delete";

export const setupRoutes = async (app: Elysia) => {
  const directories = readdirSync(join(import.meta.dir, "../routes"));

  for await (const file of directories) {
    if (file.endsWith("-routes.ts")) {
      (await import(`../routes/${file}`))?.default(app);
    }
  }
};
