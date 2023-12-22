export enum UnitMeasure {
  LT = 'lt',
}

export type Ingredient = {
  title: string;
  unit: UnitMeasure;
  id: string;
};
