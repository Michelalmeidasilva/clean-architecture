import { test, expect, describe } from "bun:test";

import { CreateIngredient } from "../CreateIngredient";
import { UnitMeasure } from "@core/entity/index";
import { IngredientsRepositorySpy } from "./mocks/IngredientsRepositorySpy";
import { DeleteIngredient } from "../DeleteIngredient";

const makeSut = () => {
  const repository = new IngredientsRepositorySpy();

  const sutCreateIngredient = new CreateIngredient(repository);
  const sutDeleteIngredient = new DeleteIngredient(repository);

  sutCreateIngredient.invoke({
    id: "3232",
    title: "Teste",
    unit: UnitMeasure.LT,
  });

  const elementToBeDeleted = sutCreateIngredient.invoke({
    id: "323123",
    title: "dsadsa",
    unit: UnitMeasure.LT,
  });

  return {
    sut: sutDeleteIngredient,
    elementToBeDeleted,
    repository,
  };
};

describe("DeleteIngredient", () => {
  test("Should delete a ingredient already inserted", () => {
    const { sut, elementToBeDeleted } = makeSut();

    const deletedElement = sut.invoke(elementToBeDeleted);

    expect(deletedElement).toMatchObject(elementToBeDeleted);
  });
});
