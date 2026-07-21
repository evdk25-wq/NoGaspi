import { IRecipeRepository } from '../repositories/IRecipeRepository';
import { Recipe } from '../entities/Recipe';

export class GenerateRecipesUseCase {
  constructor(private recipeRepository: IRecipeRepository) {}

  async execute(ingredientNames: string[]): Promise<Recipe[]> {
    if (ingredientNames.length < 1) {
      throw new Error('Veuillez sélectionner au moins 1 ingrédient.');
    }
    return this.recipeRepository.generateRecipes(ingredientNames);
  }
}
