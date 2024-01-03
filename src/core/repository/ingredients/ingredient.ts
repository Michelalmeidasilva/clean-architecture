import {
  Ingredient,
  IngredientsPartial,
  SearchIngredientsParams,
} from "../../entity/ingredients/Ingredient";

export interface IngredientsRepository {
  addIngredient: (ingredient: Ingredient) => Ingredient;
  updateIngredient: (
    attributes: IngredientsPartial,
    id: string
  ) => Ingredient | undefined;
  deleteIngredient: (ingredient: Ingredient) => Ingredient;
  getIngredients: (params?: SearchIngredientsParams) => Ingredient[];
}
