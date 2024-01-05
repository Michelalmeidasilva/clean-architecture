import { IngredientsRepository } from "@core/repository/ingredients/ingredient";
import { Ingredient } from "../../entity/ingredients/Ingredient";

export class CreateIngredient {
  constructor(private ingredientRepository: IngredientsRepository) {}

  async invoke({ unit, title }: Ingredient): Promise<Ingredient> {
    const ingredient = await this.ingredientRepository.addIngredient({
      unit,
      title,
    });

    return ingredient;
  }
}
