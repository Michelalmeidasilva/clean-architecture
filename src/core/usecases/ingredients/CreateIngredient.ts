import { CreateIngredientRepository } from "@core/repository/ingredients/CreateIngredientRepository";
import { Ingredient } from "../../entity/ingredients/Ingredient";

export type CreateIngredientsParams = Ingredient;
export type CreateIngredientsResult = Promise<boolean>;

export class CreateIngredient {
  constructor(private ingredientRepository: CreateIngredientRepository) {}

  async invoke({
    unit,
    title,
  }: CreateIngredientsParams): Promise<CreateIngredientsResult> {
    const ingredient = await this.ingredientRepository.addIngredient({
      unit,
      title,
    });

    return ingredient !== null;
  }
}
