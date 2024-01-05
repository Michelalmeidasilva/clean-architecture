import { UnitMeasure } from "@core/entity";
import { t } from "elysia";

export const CreateIngredientBodySchema = t.Object({
  title: t.Required(t.String()),
  unit: t.Required(t.Enum(UnitMeasure)),
});

export const GetIngredientQuerySchema = t.Object({
  id: t.Optional(t.String()),
});

export const UpdateIngredientBodySchema = t.Object({
  title: t.Optional(t.String()),
  unit: t.Optional(t.Enum(UnitMeasure)),
});

export const DeleteIngredientQuerySchema = t.Object({
  id: t.Required(t.String()),
});
