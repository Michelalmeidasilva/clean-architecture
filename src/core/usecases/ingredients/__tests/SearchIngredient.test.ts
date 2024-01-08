import { test, describe, expect } from "bun:test";

import { CreateIngredient } from "../CreateIngredient";
import { UnitMeasure } from "@core/entity/index";
import { IngredientsRepositorySpy } from "./mocks/IngredientsRepositorySpy";
import { SearchIngredient } from "../SearchIngredients";

const makeSut = () => {
  const repository = new IngredientsRepositorySpy();

  const sutCreateIngredient = new CreateIngredient(repository);

  sutCreateIngredient.invoke({
    id: "30",
    title: "a",
    unit: UnitMeasure.LT,
  });
  sutCreateIngredient.invoke({
    id: "2",
    title: "b",
    unit: UnitMeasure.LT,
  });
  sutCreateIngredient.invoke({
    id: "33",
    title: "@",
    unit: UnitMeasure.LT,
  });
  sutCreateIngredient.invoke({
    id: "323",
    title: "0",
    unit: UnitMeasure.LT,
  });

  sutCreateIngredient.invoke({
    id: "3233",
    title: "Test",
    unit: UnitMeasure.LT,
  });
  sutCreateIngredient.invoke({
    id: "3232",
    title: "Teste",
    unit: UnitMeasure.LT,
  });

  sutCreateIngredient.invoke({
    id: "3235",
    title: "Te",
    unit: UnitMeasure.LT,
  });
  sutCreateIngredient.invoke({
    id: "3234",
    title: "Tes",
    unit: UnitMeasure.LT,
  });

  sutCreateIngredient.invoke({
    id: "3236",
    title: "T",
    unit: UnitMeasure.LT,
  });

  return {
    repository,
    listLenght: repository.ingredients.length,
  };
};

describe("Search Ingredients", () => {
  test("Should get all ingredients without filter", async () => {
    const { repository, listLenght } = makeSut();

    const sut = new SearchIngredient(repository);

    const ingredients = await sut.invoke({});

    expect(ingredients?.length).toBe(listLenght);
  });

  test("Should get all ingredients by asc", async () => {
    const { repository } = makeSut();

    const sut = new SearchIngredient(repository);

    const ingredients = await sut.invoke({ orderBy: "asc" });

    const ascTitles: (string | undefined | null)[] = [
      "@",
      "0",
      "a",
      "b",
      "T",
      "Te",
      "Tes",
      "Test",
      "Teste",
    ];

    expect(ingredients?.length === ascTitles.length);

    ingredients?.forEach((ingredient, index) => {
      const expectedValue = ascTitles[index];
      const value = ingredient?.title;
      expect(value).toBe(expectedValue!);
    });
  });

  test("Should get all ingredients by desc", async () => {
    const { repository } = makeSut();

    const sut = new SearchIngredient(repository);

    const ingredients = await sut.invoke({ orderBy: "desc" });

    const descTitles = ["Teste", "Test", "Tes", "Te", "T", "b", "a", "0", "@"];

    expect(ingredients?.length === descTitles.length);

    ingredients?.forEach((ingredient, index) => {
      const expectedValue = descTitles[index];
      const value = ingredient?.title;
      expect(value).toBe(expectedValue!);
    });
  });
});
