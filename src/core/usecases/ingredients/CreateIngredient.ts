import { IngredientsRepository } from "@core/repository/ingredients/ingredient";
import { Ingredient } from "../../entity/ingredients/Ingredient";

export class CreateIngredient {
  constructor(private ingredientRepository: IngredientsRepository) {}

  invoke({ unit, title, id }: Ingredient): Ingredient {
    const ingredient = this.ingredientRepository.addIngredient({
      unit,
      title,
      id,
    });

    return ingredient;
  }
}
