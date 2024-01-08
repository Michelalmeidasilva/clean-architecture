import { Collection } from "mongodb";

import { MongoHelper } from "../mongo-helper";

// import { Ingredient, IngredientsPartial } from "@core/entity";
import {
  SearchIngredientsParams,
  SearchIngredientsResult,
} from "@core/usecases/ingredients";
import { SearchIngredientRepository } from "@core/repository/ingredients/SearchIngredientRepository";

export default class IngredientsRepositoryMongoDb
  implements SearchIngredientRepository
{
  static async getCollection(): Promise<Collection | null> {
    return MongoHelper.getCollection("ingredients");
  }

  async getIngredients(
    params?: SearchIngredientsParams
  ): SearchIngredientsResult {
    const collection = await IngredientsRepositoryMongoDb.getCollection();
    const ingredientsDocument = await collection?.find().toArray();

    console.log({ ingredientsDocument });

    if (params) {
      return [];
      // return ingredientsDocument;
    }

    return [];
    // return ingredientsDocument;
  }

  // async addIngredient(ingredient: Ingredient): Promise<Ingredient> {
  //   const collection = await IngredientsRepositoryMongoDb.getCollection();

  //   if (collection) {
  //     const test = await collection.insertOne({ ingredient });
  //   }

  //   return ingredient;
  // }

  // updateIngredient(attributes: IngredientsPartial, id: string) {
  //   return { ...attributes, id } as Ingredient;
  // }

  // deleteIngredient(ingredient: Ingredient) {
  //   return ingredient;
  // }

  // async getIngredients() {
  //   const collection = await IngredientsRepositoryMongoDb.getCollection();

  //   const ingredientsDocument = await collection?.find().toArray();

  //   console.log(ingredientsDocument);
  //   return [];
  // }
}
