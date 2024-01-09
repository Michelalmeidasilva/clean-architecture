import { Ingredient } from "@core/entity";
import { SearchIngredient } from "@core/usecases/ingredients";
import IngredientsRepositoryMongoDb from "@infra/database/mongo/repository/IngredientsRepositoryMongoDb";
// import { CreateIngredient } from "@core/usecases/ingredients/CreateIngredient";
// import { SearchIngredient } from "@core/usecases/ingredients/SearchIngredients";
// import IngredientsRepositoryMongoDb from "@infra/database/mongo/repository/IngredientsRepositoryMongoDb";

export const IngredientsController = {
  async createIngredient({ body }: { body: Ingredient }) {
    console.log({ body });
    // const repository = new IngredientsRepositoryMongoDb();
    // const useCase = new CreateIngredient(repository);
    // return useCase.invoke({ ...body });
  },

  async getIngredients({ query }: { query: { id?: string } }) {
    if (query) {
      console.log("test");
    }
    const repository = new IngredientsRepositoryMongoDb();
    const useCase = new SearchIngredient(repository);
    const ingredients = await useCase.invoke({ orderBy: "none" });

    console.log("ingre", { ingredients });
    return ingredients;
  },

  async updateIngredient({ body }: { body: Ingredient }) {
    console.log({ body });
  },

  async deleteIngredient({ query }: { query: { id: string } }) {
    console.log({ query });
  },
};
