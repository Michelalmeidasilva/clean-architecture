import { Collection } from "mongodb";

import { MongoHelper } from "../mongo-helper";

import {
  CreateIngredientsParams,
  CreateIngredientsResult,
  SearchIngredientsParams,
  SearchIngredientsResult,
} from "@core/usecases/ingredients";
import { SearchIngredientRepository } from "@core/repository/ingredients/SearchIngredientRepository";
import { Ingredient } from "@core/entity";

export default class IngredientsRepositoryMongoDb
  implements SearchIngredientRepository
{
  static getCollection(): Collection<Ingredient> | null {
    return MongoHelper.getCollection<Ingredient>("ingredients");
  }

  async getIngredients(
    params?: SearchIngredientsParams
  ): SearchIngredientsResult {
    const collection = IngredientsRepositoryMongoDb.getCollection();

    const ingredients = await collection?.find()?.toArray();

    if (params) {
      return ingredients as Ingredient[];
    }

    return ingredients as Ingredient[];
  }

  async addIngredient(
    params: CreateIngredientsParams
  ): Promise<CreateIngredientsResult> {
    const collection = IngredientsRepositoryMongoDb.getCollection();

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
