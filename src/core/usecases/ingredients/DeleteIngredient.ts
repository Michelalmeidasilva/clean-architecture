import { IngredientsRepository } from "@core/repository/ingredients/ingredient";
import { Ingredient } from "../../entity/ingredients/Ingredient";

export class DeleteIngredient {
  constructor(private ingredientRepository: IngredientsRepository) {}

  invoke(ingredient: Ingredient): Ingredient | null {
    if (ingredient) {
      const deletedIngredient =
        this.ingredientRepository.deleteIngredient(ingredient);

      return deletedIngredient;
    }

    return null;
  }
}
