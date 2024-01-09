export enum UnitMeasure {
  LT = "lt",
}

export type Ingredient = {
  title: string;
  unit: UnitMeasure;
  readonly _id?: string;
};

export type IngredientsPartial = Omit<Partial<Ingredient>, "id">;
