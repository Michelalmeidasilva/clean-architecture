import { test, expect, describe } from "bun:test";

import { CreateIngredient } from "../CreateIngredient";
import { IngredientsRepositorySpy } from "./mocks/IngredientsRepositorySpy";
import { UnitMeasure } from "@core/entity";

const makeSut = () => {
  const repository = new IngredientsRepositorySpy();

  const sutCreateIngredient = new CreateIngredient(repository);

  return {
    sut: sutCreateIngredient,
    repository,
  };
};

describe("CreateIngredient", () => {
  test("Should create a new ingredient", () => {
    const { sut, repository } = makeSut();

    const createdElement = sut.invoke({
      id: "323123",
      title: "dsadsa",
      unit: UnitMeasure.LT,
    });

    expect(repository.ingredients[0]).toMatchObject(createdElement);
  });
});
