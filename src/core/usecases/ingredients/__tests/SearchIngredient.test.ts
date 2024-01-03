import { test, describe, expect } from "bun:test";

import { CreateIngredient } from "../CreateIngredient";
import { UnitMeasure } from "@core/entity/index";
import { IngredientsRepositorySpy } from "./mocks/IngredientsRepositorySpy";
import { SearchIngredient } from "../SearchIngredients";

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
    listLenght: repository.ingredients.length,
  };
};

describe("Search Ingredients", () => {
  // test.skip("Should get all ingredients by asc", () => {
  //   const { repository, listLenght } = makeSut();

  //   const sut = new SearchIngredient(repository);

  //   const ingredients = sut.invoke({ orderBy: "asc" });

  //   // expect(ingredients[0]).toBeArrayOfSize(listLenght);

  //   //how to validate if all elements is the asc

  //   expect(ingredients?.[0]?.title).toBe("T");
  // });

  test("Should get all ingredients by desc", () => {
    const { repository, listLenght } = makeSut();

    const sut = new SearchIngredient(repository);

    const ingredients = sut.invoke({ orderBy: "asc" });

    expect(ingredients).toBeArrayOfSize(listLenght);

    //how to validate if all elements is the asc

    expect(ingredients?.[0]?.title).toBe("Teste");
  });

  // test("Should get ingredients by name in asc order", () => {
  //   const { repository, listLenght } = makeSut();

  //   const sut = new SearchIngredient(repository);

  //   const ingredients = sut.invoke({ orderBy: "desc" });

  //   //how to validate if all elements is the asc

  //   // expect(ingredients).toBeArrayOfSize(listLenght);
  // });

  // test("Should get ingredients by name in desc order", () => {
  //   const { repository, listLenght } = makeSut();

  //   const sut = new SearchIngredient(repository);

  //   const ingredients = sut.invoke({ orderBy: "desc" });

  //   //how to validate if all elements is the asc

  //   // expect(ingredients).toBeArrayOfSize(listLenght);
  // });
});
