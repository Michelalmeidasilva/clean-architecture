import { IngredientsRepository } from "@core/repository/ingredients/ingredient";
import {
  Ingredient,
  IngredientsPartial,
} from "../../entity/ingredients/Ingredient";

export class UpdateIngredient {
  constructor(private ingredientRepository: IngredientsRepository) {}

  invoke(
    attributes: Omit<IngredientsPartial, "id">,
    id: string
  ): Ingredient | null {
    const updatedIngredient = this.ingredientRepository.updateIngredient(
      attributes,
      id
    );

    return updatedIngredient;
  }
}
