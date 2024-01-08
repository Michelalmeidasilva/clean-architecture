import {
  UpdateIngredientParams,
  UpdateIngredientResult,
} from "@core/usecases/ingredients/UpdateIngredient";

export interface UpdateIngredientRepository {
  updateIngredient: (params: UpdateIngredientParams) => UpdateIngredientResult;
}
