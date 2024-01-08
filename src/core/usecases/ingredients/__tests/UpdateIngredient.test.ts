import { test, expect, describe } from "bun:test";

import { UnitMeasure } from "@core/entity/index";

import { CreateIngredient } from "../CreateIngredient";
import { UpdateIngredient } from "../UpdateIngredient";
import { IngredientsRepositorySpy } from "./mocks/IngredientsRepositorySpy";

const makeSut = () => {
  const repository = new IngredientsRepositorySpy();

  const ingredientCreatedId = "323123";

  new CreateIngredient(repository).invoke({
    id: ingredientCreatedId,
    title: "dsadsa",
    unit: UnitMeasure.LT,
  });

  return {
    repository,
    ingredientCreatedId,
  };
};

describe("UpdateIngredient", () => {
  test("Should update a ingredient already inserted", () => {
    const { repository, ingredientCreatedId } = makeSut();

    const sut = new UpdateIngredient(repository);

    sut.invoke({
      attributes: {
        title: "New Title",
      },
      id: ingredientCreatedId,
    });

    const ingredientAtRepository = repository.ingredients.find(
      (item) => item.id === ingredientCreatedId
    );

    expect(ingredientAtRepository?.title).toBe("New Title");
  });
});
