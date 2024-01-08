import { CreateIngredientsParams, CreateIngredientsResult } from "@core/usecases/ingredients/CreateIngredient";

export interface CreateIngredientRepository {
  addIngredient: (params: CreateIngredientsParams) => CreateIngredientsResult;
}
