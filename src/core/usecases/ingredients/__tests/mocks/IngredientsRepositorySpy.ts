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

  addIngredient(ingredient: Ingredient) {
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

  getIngredients(params: SearchIngredientsParams) {
    return this.ingredients;
  }

  updateIngredient(ingredient: IngredientsPartial, id: string) {
    const itemIndex = this.ingredients.findIndex((item) => item.id === id);

    const updatedElement = {
      ...this.ingredients[itemIndex],
      ...ingredient,
    };

    this.ingredients[itemIndex] = updatedElement;

    return updatedElement;
  }
}
