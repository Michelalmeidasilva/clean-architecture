import { Ingredient } from "../../entity/ingredients/Ingredient";
 
export class CreateIngredient {
  invoke({ unit, title, id }: Ingredient): Ingredient {
    return {
      unit,
      title,
      id,
    };
  }
}
