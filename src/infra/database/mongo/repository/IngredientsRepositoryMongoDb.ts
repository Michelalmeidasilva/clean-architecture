import { Collection } from "mongodb";

import { MongoHelper } from "../mongo-helper";

import { Ingredient, IngredientsPartial } from "@core/entity";
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
      const test = await collection.insertOne({ ingredient });
      console.log("inserted", { test });
    }

    return ingredient;
  }

  updateIngredient(attributes: IngredientsPartial, id: string) {
    return { ...attributes, id } as Ingredient;
  }

  deleteIngredient(ingredient: Ingredient) {
    return ingredient;
  }

  async getIngredients() {
    const collection = await IngredientsRepositoryMongoDb.getCollection();

    const ingredientsDocument = await collection?.find().toArray();

    console.log(ingredientsDocument);
    return [];
  }
}
