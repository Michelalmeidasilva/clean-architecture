export enum UnitMeasure {
  LT = "lt",
}

export type SearchIngredientsParams = {
  orderBy?: "asc" | "desc" | "none";
};

export type Ingredient = {
  title: string;
  unit: UnitMeasure;
  readonly id?: string;
};

export type IngredientsPartial = Omit<Partial<Ingredient>, "id">;
