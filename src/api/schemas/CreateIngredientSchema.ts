import { UnitMeasure } from "@core/entity";
import { t } from "elysia";

export const CreateIngredientSchemaValidator = t.Object({
  title: t.String(),
  unit: t.Enum(UnitMeasure),
});
