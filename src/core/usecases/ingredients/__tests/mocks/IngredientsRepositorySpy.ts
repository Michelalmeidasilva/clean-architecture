import {
  Ingredient,
  IngredientsPartial,
  SearchIngredientsParams,
} from "@core/entity";
import { IngredientsRepository } from "@core/repository/ingredients/ingredient";

export class IngredientsRepositorySpy implements IngredientsRepository {
  public ingredients: Ingredient[];

  constructor() {
    this.ingredients = [];
  }

  async addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    return ingredient;
  }

  deleteIngredient(ingredient: Ingredient) {
    const filteredArray = this.ingredients.filter(
      (item) => item.id !== ingredient.id
    );

    this.ingredients = filteredArray;
    return ingredient;
  }

  getIngredients(params?: SearchIngredientsParams) {
    console.log(params);
    return this.ingredients;
  }

  updateIngredient(
    attributes: IngredientsPartial,
    id: string
  ): Ingredient | undefined {
    const itemIndex = this.ingredients.findIndex((item) => item.id === id);

    const updatedElement = {
      ...this.ingredients[itemIndex],
      ...attributes,
    };

    this.ingredients[itemIndex] = updatedElement as Ingredient;

    return this.ingredients[itemIndex];
  }
}
