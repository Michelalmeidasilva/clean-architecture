import { UpdateIngredientRepository } from "@core/repository/ingredients/UpdateIngredientRepository";
import {
  Ingredient,
  IngredientsPartial,
} from "../../entity/ingredients/Ingredient";

export type UpdateIngredientParams = {
  attributes: Omit<IngredientsPartial, "id">;
  id: string;
};
export type UpdateIngredientResult = Promise<Ingredient | null>;

export class UpdateIngredient {
  constructor(private ingredientRepository: UpdateIngredientRepository) {}

  invoke({ attributes, id }: UpdateIngredientParams): UpdateIngredientResult {
    const updatedIngredient = this.ingredientRepository.updateIngredient({
      attributes,
      id,
    });

    return updatedIngredient;
  }
}
