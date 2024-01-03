import { test, expect, describe } from "bun:test";

import { UnitMeasure } from "@core/entity/index";

import { CreateIngredient } from "../CreateIngredient";
import { UpdateIngredient } from "../UpdateIngredient";
import { IngredientsRepositorySpy } from "./mocks/IngredientsRepositorySpy";

const makeSut = () => {
  const repository = new IngredientsRepositorySpy();

  const ingredientCreated = new CreateIngredient(repository).invoke({
    id: "323123",
    title: "dsadsa",
    unit: UnitMeasure.LT,
  });

  return {
    repository,
    ingredientCreated,
  };
};

describe("UpdateIngredient", () => {
  test("Should update a ingredient already inserted", () => {
    const { repository, ingredientCreated } = makeSut();

    const sut = new UpdateIngredient(repository);

    sut.invoke(
      {
        title: "New Title",
      },
      ingredientCreated?.id!
    );

    const ingredientAtRepository = repository.ingredients.find(
      (item) => item.id === ingredientCreated.id
    );

    expect(ingredientAtRepository?.title).toBe("New Title");
  });
});
