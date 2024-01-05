import { Ingredient } from "@core/entity";
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
    console.log({ query });
    // const repository = new IngredientsRepositoryMongoDb();
    // const useCase = new SearchIngredient(repository);
    // const ingredients = useCase.invoke({ orderBy: "none" });
    // return ingredients;
  },

  async updateIngredient({ body }: { body: Ingredient }) {
    console.log({ body });
  },

  async deleteIngredient({ query }: { query: { id: string } }) {
    console.log({ query });
  },
};
