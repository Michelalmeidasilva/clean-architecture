import { Ingredient, SearchIngredientsParams } from "@core/entity";
import { IngredientsRepository } from "@core/repository/ingredients/ingredient";

export class SearchIngredient {
  constructor(private ingredientRepository: IngredientsRepository) {}

  async invoke({
    orderBy = "none",
  }: SearchIngredientsParams): Promise<Ingredient[]> {
    const ingredients = await this.ingredientRepository.getIngredients();
    console.log("ingredients", { ingredients });

    if (orderBy === "asc") {
      return ingredients.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (orderBy === "desc") {
      return ingredients.sort((a, b) => b.title.localeCompare(a.title));
    }

    return ingredients;
  }
}
