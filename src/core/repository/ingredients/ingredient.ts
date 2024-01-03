import {
  Ingredient,
  IngredientsPartial,
} from "../../entity/ingredients/Ingredient";

export interface IngredientsRepository {
  addIngredient: (ingredient: Ingredient) => Ingredient;
  updateIngredient: (attributes: IngredientsPartial, id: string) => Ingredient;
  deleteIngredient: (ingredient: Ingredient) => Ingredient;
  getIngredients: (params: { orderBy: "asc" | "dsc" }) => Ingredient[];
}
