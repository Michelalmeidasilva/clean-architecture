import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  test,
  expect,
} from "bun:test";
import { MongoHelper } from "../../mongo-helper";
import { Collection } from "mongodb";
import IngredientsRepositoryMongoDb from "../IngredientsRepositoryMongoDb";

const makeSut = (): IngredientsRepositoryMongoDb => {
  return new IngredientsRepositoryMongoDb();
};

let ingredientsCollection: Collection | null;

describe("Ingredients Repository", () => {
  beforeAll(async () => {
    MongoHelper.connect(process.env.MONGODB_CONNECTION_URL);

    console.log(MongoHelper.client);
  });

  afterAll(async () => {
    MongoHelper.disconnect();
  });

  beforeEach(async () => {
    ingredientsCollection = MongoHelper.getCollection("ingredients");
    await ingredientsCollection?.deleteMany({});
  });

  describe("Get Ingredients()", () => {
    test("Should return a ingredients on success", async () => {
      const sut = makeSut();
      const ingredients = await sut.getIngredients();
      expect(ingredients).toBeEmpty();
    });
  });

  describe("Create Ingredient()", () => {
    test("Should create a new ingredient", async () => {
      const sut = makeSut();
      const ingredients = await sut.getIngredients();
      expect(ingredients).toBeEmpty();
    });
  });
});
