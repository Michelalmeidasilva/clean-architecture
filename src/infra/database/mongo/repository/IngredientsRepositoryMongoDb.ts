import { Collection } from "mongodb";

import { MongoHelper } from "../mongo-helper";

// import { Ingredient, IngredientsPartial } from "@core/entity";
import {
  CreateIngredientsParams,
  CreateIngredientsResult,
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

  constructor() {}

  async getIngredients(
    params?: SearchIngredientsParams
  ): SearchIngredientsResult {
    console.log("enter here");

    const collection = await IngredientsRepositoryMongoDb.getCollection();

    console.log({ collection });
    const ingredientsDocument = await collection?.find().toArray();

    console.log({ ingredientsDocument });

    if (params) {
      return [];
      // return ingredientsDocument;
    }

    return [];
    // return ingredientsDocument;
  }

  async addIngredient(
    params: CreateIngredientsParams
  ): Promise<CreateIngredientsResult> {
    const collection = await IngredientsRepositoryMongoDb.getCollection();

    console.log({ collection });

    if (params && collection) {
      const result = await collection.insertOne({ params });

      console.log({ result });
      return result.acknowledged;
    }

    return false;
  }

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
