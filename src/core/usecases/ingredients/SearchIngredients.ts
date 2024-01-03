import { SearchIngredientsParams } from "@core/entity";
import { IngredientsRepository } from "@core/repository/ingredients/ingredient";

export class SearchIngredient {
  constructor(private ingredientRepository: IngredientsRepository) {}

  invoke({ orderBy }: SearchIngredientsParams) {
    if (orderBy === "asc") {
      return this.ingredientRepository.getIngredients({ orderBy });
    }

    if (orderBy === "desc") {
      return this.ingredientRepository.getIngredients({ orderBy });
    }
  }
}
