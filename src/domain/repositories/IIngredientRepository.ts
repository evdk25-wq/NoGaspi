import { Ingredient } from '../entities/Ingredient';

export interface IIngredientRepository {
  getPopularIngredients(): Promise<Ingredient[]>;
  searchIngredients(query: string): Promise<Ingredient[]>;
}
