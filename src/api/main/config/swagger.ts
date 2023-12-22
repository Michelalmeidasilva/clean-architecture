import Elysia, { LocalHook } from "elysia";
import { swagger } from "@elysiajs/swagger";

import { MethodsHttp } from ".";

export type SwaggerDocs = Record<MethodsHttp, LocalHook>;

const normalizeMethod = (
  impl: LocalHook,
  { tagsDefault }: { tagsDefault: string[] }
) => ({
  ...impl,
  detail: {
    ...impl.detail,
    tags: normalizeTags({
      tags: impl.detail?.tags ?? [],
      tagsDefault,
    }),
  },
});

const normalizeTags = ({
  tags,
  tagsDefault,
}: {
  tags: string[];
  tagsDefault: string[];
}) => [...tags, ...tagsDefault].filter((item) => !item);

export const createSwaggerDocs = (docsImpl: SwaggerDocs): SwaggerDocs => {
  return {
    delete: normalizeMethod(docsImpl["delete"], { tagsDefault: ["delete"] }),
    get: normalizeMethod(docsImpl["get"], { tagsDefault: ["get"] }),
    post: normalizeMethod(docsImpl["post"], { tagsDefault: ["post"] }),
    put: normalizeMethod(docsImpl["put"], { tagsDefault: ["put"] }),
  };
};

export const setupSwagger = (app: Elysia) => {
  app.use(
    swagger({
      documentation: {
        info: {
          title: "Galileu Documentation",
          version: "0.0.1",
        },
      },
    })
  );
};

export const SwaggerHelpers = {
  normalizeMethod,
  normalizeTags,
  createSwaggerDocs,
};
