import { test, expect, describe } from "bun:test";

import { CreateIngredient } from "../CreateIngredient";
import { UnitMeasure } from "@core/entity/index";
import { IngredientsRepositorySpy } from "./mocks/IngredientsRepositorySpy";
import { DeleteIngredient } from "../DeleteIngredient";

const makeSut = async () => {
  const repository = new IngredientsRepositorySpy();

  const sutCreateIngredient = new CreateIngredient(repository);
  const sutDeleteIngredient = new DeleteIngredient(repository);
  const elementIdtoBeDeleted = "323123";

  await sutCreateIngredient.invoke({
    id: "3232",
    title: "Teste",
    unit: UnitMeasure.LT,
  });

  await sutCreateIngredient.invoke({
    id: "323123",
    title: "dsadsa",
    unit: UnitMeasure.LT,
  });

  return {
    sut: sutDeleteIngredient,
    elementIdtoBeDeleted,
    repository,
  };
};

describe("DeleteIngredient", () => {
  test("Should delete a ingredient already inserted", async () => {
    const { sut, elementIdtoBeDeleted } = await makeSut();

    const isSuccess = await sut.invoke({
      id: elementIdtoBeDeleted,
    });

    expect(isSuccess).toBeTrue();
  });
});
