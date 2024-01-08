import {
  DeleteIngredientParams,
  DeleteIngredientResult,
} from "@core/usecases/ingredients/DeleteIngredient";

export interface DeleteIngredientRepository {
  deleteIngredient: (params: DeleteIngredientParams) => DeleteIngredientResult;
}
