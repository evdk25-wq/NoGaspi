import { Recipe } from '../entities/Recipe';

export interface IRecipeRepository {
  generateRecipes(ingredientNames: string[]): Promise<Recipe[]>;
}
