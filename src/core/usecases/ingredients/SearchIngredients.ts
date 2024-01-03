import { Ingredient, SearchIngredientsParams } from "@core/entity";
import { IngredientsRepository } from "@core/repository/ingredients/ingredient";

export class SearchIngredient {
  constructor(private ingredientRepository: IngredientsRepository) {}

  invoke({ orderBy = "none" }: SearchIngredientsParams): Ingredient[] {
    const ingredients = this.ingredientRepository.getIngredients();

    if (orderBy === "asc") {
      return ingredients.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (orderBy === "desc") {
      return ingredients.sort((a, b) => b.title.localeCompare(a.title));
    }

    return ingredients;
  }
}
