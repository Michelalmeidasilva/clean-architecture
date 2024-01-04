import { Ingredient } from "@core/entity";
import { CreateIngredient } from "@core/usecases/ingredients/CreateIngredient";
import { IngredientsRepositorySpy } from "@core/usecases/ingredients/__tests/mocks/IngredientsRepositorySpy";

export class IngredientsController {
  constructor() {}

  createIngredient(ingredient: Ingredient) {
    const repository = new IngredientsRepositorySpy();
    const createIngredient = new CreateIngredient(repository);
    return createIngredient.invoke(ingredient);
  }
}
