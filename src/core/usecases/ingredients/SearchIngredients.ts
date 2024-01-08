import { Ingredient } from "@core/entity";
import { SearchIngredientRepository } from "@core/repository/ingredients/SearchIngredientRepository";

export type SearchIngredientsParams = {
  orderBy?: "asc" | "desc" | "none";
};

export type SearchIngredientsResult= Promise<Ingredient[] | null>
export class SearchIngredient {
  constructor(private ingredientRepository: SearchIngredientRepository) {}

  async invoke({
    orderBy = "none",
  }: SearchIngredientsParams): SearchIngredientsResult {
    const ingredients = await this.ingredientRepository.getIngredients();
    console.log("ingredients", { ingredients });

    if(ingredients === null){
      return ingredients;
    }
    
    if (orderBy === "asc") {
      return ingredients.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (orderBy === "desc") {
      return ingredients.sort((a, b) => b.title.localeCompare(a.title));
    }

    return ingredients;
  }
}
