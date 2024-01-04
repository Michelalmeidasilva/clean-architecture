import {
  Ingredient,
  IngredientsPartial,
  SearchIngredientsParams,
} from "@core/entity";
import { IngredientsRepository } from "@core/repository/ingredients/ingredient";

export default class IngredientsRepositoryMongoDb
  implements IngredientsRepository
{
  addIngredient(ingredient: Ingredient) {
    return ingredient;
  }

  updateIngredient(attributes: IngredientsPartial, id: string) {
    return { ...attributes, id } as Ingredient;
  }

  deleteIngredient(ingredient: Ingredient) {
    return ingredient;
  }
  getIngredients(params?: SearchIngredientsParams | undefined) {
    console.log({ params });
    return [];
  }
}
