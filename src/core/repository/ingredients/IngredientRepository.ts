
import { CreateIngredientRepository } from "./CreateIngredientRepository";
import { DeleteIngredientRepository } from "./DeleteIngredientRepository";
import { SearchIngredientRepository } from "./SearchIngredientRepository";
import { UpdateIngredientRepository } from "./UpdateIngredientRepository";

export interface IngredientsRepository
  extends CreateIngredientRepository,
    DeleteIngredientRepository,
    UpdateIngredientRepository,
    SearchIngredientRepository {
    }
