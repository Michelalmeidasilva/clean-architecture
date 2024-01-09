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
import { UnitMeasure } from "@core/entity";

const makeSut = (): IngredientsRepositoryMongoDb => {
  return new IngredientsRepositoryMongoDb();
};

describe("Ingredients Repository", () => {
  let ingredientsCollection = null;
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGODB_CONNECTION_URL);
    console.log("finish");
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    ingredientsCollection = MongoHelper.getCollection("ingredients");

    console.log("dbname", ingredientsCollection?.dbName);
    // await ingredientsCollection?.deleteMany({});
  });

  describe("Get Ingredients()", () => {
    test("Should return a ingredients on success", async () => {
      console.log("enter here");

      const sut = makeSut();
      const ingredients = await sut.getIngredients();
      expect(ingredients).toBeEmpty();
    });
  });

  describe("Create Ingredient()", () => {
    test("Should create a new ingredient", async () => {
      const sut = makeSut();
      const ingredients = await sut.addIngredient({
        title: "michel",
        unit: UnitMeasure.LT,
      });
      console.log("eter here", { ingredients });

      expect(ingredients).toBeEmpty();
    });
  });
});
