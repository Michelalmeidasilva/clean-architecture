import {
  SearchIngredientsParams,
  SearchIngredientsResult,
} from "@core/usecases/ingredients/SearchIngredients";

export interface SearchIngredientRepository {
  getIngredients: (params?: SearchIngredientsParams) => SearchIngredientsResult;
}
