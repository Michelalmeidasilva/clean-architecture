import { test, describe } from "bun:test";

import { CreateIngredient } from "../CreateIngredient";
import { UnitMeasure } from "@core/entity/index";
import { IngredientsRepositorySpy } from "./mocks/IngredientsRepositorySpy";
import { DeleteIngredient } from "../DeleteIngredient";

const makeSut = () => {
  const repository = new IngredientsRepositorySpy();

  const sutCreateIngredient = new CreateIngredient(repository);

  sutCreateIngredient.invoke({
    id: "3232",
    title: "Teste",
    unit: UnitMeasure.LT,
  });

  sutCreateIngredient.invoke({
    id: "3233",
    title: "Test",
    unit: UnitMeasure.LT,
  });
  sutCreateIngredient.invoke({
    id: "3234",
    title: "Tes",
    unit: UnitMeasure.LT,
  });

  sutCreateIngredient.invoke({
    id: "3235",
    title: "Te",
    unit: UnitMeasure.LT,
  });

  sutCreateIngredient.invoke({
    id: "3236",
    title: "T",
    unit: UnitMeasure.LT,
  });

  return {
    repository,
  };
};

describe("DeleteIngredient", () => {
  test("Should search a ingredient by title", () => {
    const { repository } = makeSut();

    const sut = new DeleteIngredient(repository);
  });
});
