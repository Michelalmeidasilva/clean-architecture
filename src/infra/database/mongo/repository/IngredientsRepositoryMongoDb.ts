import { Collection } from "mongodb";

import { MongoHelper } from "../mongo-helper";

import {
  Ingredient,
  IngredientsPartial,
  SearchIngredientsParams,
} from "@core/entity";
import { IngredientsRepository } from "@core/repository/ingredients/ingredient";

export default class IngredientsRepositoryMongoDb
  implements IngredientsRepository
{
  static async getCollection(): Promise<Collection | null> {
    return MongoHelper.getCollection("ingredients");
  }

  async addIngredient(ingredient: Ingredient): Promise<Ingredient> {
    const collection = await IngredientsRepositoryMongoDb.getCollection();

    if (collection) {
      await collection.insertOne({ ingredient });
    }

    return ingredient;
  }

  updateIngredient(attributes: IngredientsPartial, id: string) {
    return { ...attributes, id } as Ingredient;
  }

  deleteIngredient(ingredient: Ingredient) {
    return ingredient;
  }

  getIngredients(params?: SearchIngredientsParams | undefined) {
    console.log({ params });
    return [];
  }
}
