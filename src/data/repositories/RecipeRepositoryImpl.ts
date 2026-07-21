import { IRecipeRepository } from '../../domain/repositories/IRecipeRepository';
import { Recipe } from '../../domain/entities/Recipe';
import { MOCK_RECIPES } from '../sources/mockRecipes';

export class RecipeRepositoryImpl implements IRecipeRepository {
  async generateRecipes(ingredientNames: string[]): Promise<Recipe[]> {
    const normalizedInput = ingredientNames.map(name => name.toLowerCase().trim());

    return MOCK_RECIPES.map(recipe => {
      const matchingCount = recipe.ingredients.filter(ing =>
        normalizedInput.includes(ing.toLowerCase().trim())
      ).length;

      return {
        ...recipe,
        matchingIngredientsCount: matchingCount
      };
    }).sort((a, b) => b.matchingIngredientsCount - a.matchingIngredientsCount);
  }
}
