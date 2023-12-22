import { Ingredient } from '../../entity/ingredients/Ingredient';

export interface IngredientsRepository {
  addNote: (note: Ingredient) => void;
  updateNote: (note: Ingredient) => boolean;
  deleteNote: (note: Ingredient) => boolean;
  getNotes: () => Ingredient[];
}
