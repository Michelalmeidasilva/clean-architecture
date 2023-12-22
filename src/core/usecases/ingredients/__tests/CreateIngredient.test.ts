import { test, expect, describe } from "bun:test";

import { CreateIngredient } from "../CreateIngredient";
import { UnitMeasure } from "@core/entity/index";

const IngredientMock = {
  title: "Feijão",
  unit: UnitMeasure.LT,
  id: "hash_3424234",
};

describe("CreateIngredient", () => {
  test("Should Create a new ingredient", () => {
    const ingredient = new CreateIngredient();

    console.log(ingredient);

    expect(ingredient).toMatchObject(IngredientMock);
  });
});
