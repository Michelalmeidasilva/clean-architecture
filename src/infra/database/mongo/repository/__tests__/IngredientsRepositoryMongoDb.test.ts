import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  test,
  expect,
} from "bun:test";
import { MongoHelper } from "@infra/database/mongo/mongo-helper";
import IngredientsRepositoryMongoDb from "../IngredientsRepositoryMongoDb";
import { Ingredient } from "@core/entity";
import { Collection } from "mongodb";

const makeSut = (): IngredientsRepositoryMongoDb => {
  return new IngredientsRepositoryMongoDb();
};

describe("Ingredients Repository", () => {
  let ingredientsCollection: Collection<Ingredient> | null;
  beforeAll(async () => {
    MongoHelper.connect(process.env.MONGODB_CONNECTION_URL);
    console.log("finish");
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    ingredientsCollection = MongoHelper.getCollection("ingredients");
  });

  describe("Get Ingredients()", () => {
    test("Should return a ingredients on success", async () => {
      console.log(ingredientsCollection?.dbName);
      const sut = makeSut();
      const ingredients = await sut.getIngredients();
      expect(ingredients).toBeEmpty();
    });
  });

  // describe("Create Ingredient()", () => {
  //   test("Should create a new ingredient", async () => {
  //     const sut = makeSut();
  //     const ingredients = await sut.addIngredient({
  //       title: "michel",
  //       unit: UnitMeasure.LT,
  //     });

  //     expect(ingredients).toBeEmpty();
  //   });
  // });
});
