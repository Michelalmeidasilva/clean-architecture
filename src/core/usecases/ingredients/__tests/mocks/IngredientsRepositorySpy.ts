import { Ingredient } from "@core/entity";

import { IngredientsRepository } from "@core/repository/ingredients/IngredientRepository";

import {
  CreateIngredientsResult,
  DeleteIngredientParams,
  DeleteIngredientResult,
  SearchIngredientsParams,
  SearchIngredientsResult,
  UpdateIngredientParams,
  UpdateIngredientResult,
} from "@core/usecases/ingredients";

export class IngredientsRepositorySpy implements IngredientsRepository {
  public ingredients: Ingredient[];

  constructor() {
    this.ingredients = [];
  }

  async addIngredient(params: Ingredient): CreateIngredientsResult {
    const idCreated = "323123";
    this.ingredients?.push({ ...params, id: idCreated });
    return true;
  }

  async deleteIngredient(
    params: DeleteIngredientParams
  ): DeleteIngredientResult {
    const filteredArray = this.ingredients.filter(
      (item) => item.id !== params.id
    );

    this.ingredients = filteredArray;

    return true;
  }

  async getIngredients(
    params?: SearchIngredientsParams
  ): SearchIngredientsResult {
    console.log(params);
    return this.ingredients;
  }

  async updateIngredient({
    attributes,
    id,
  }: UpdateIngredientParams): UpdateIngredientResult {
    const itemIndex = this.ingredients.findIndex((item) => item.id === id);

    const updatedElement = {
      ...this.ingredients[itemIndex],
      ...attributes,
    };

    this.ingredients[itemIndex] = updatedElement as Ingredient;

    return updatedElement as Ingredient;
  }
}
