import { DeleteIngredientRepository } from "@core/repository/ingredients/DeleteIngredientRepository";

export type DeleteIngredientParams = {
  id: string;
};
export type DeleteIngredientResult = Promise<boolean>;

export class DeleteIngredient {
  constructor(private ingredientRepository: DeleteIngredientRepository) {}

  async invoke(params: DeleteIngredientParams): DeleteIngredientResult {
    const deletedIngredient = await this.ingredientRepository.deleteIngredient(
      params
    );

    return deletedIngredient !== null;
  }
}
