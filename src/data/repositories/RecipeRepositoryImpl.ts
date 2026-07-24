import { IRecipeRepository } from '../../domain/repositories/IRecipeRepository';
import { Recipe } from '../../domain/entities/Recipe';
import { Platform } from 'react-native';

const API_BASE_URL = 'http://192.168.129.23:8000'; // Adresse IP locale pour Expo Go

export class RecipeRepositoryImpl implements IRecipeRepository {
  async generateRecipes(ingredientNames: string[]): Promise<Recipe[]> {
    const response = await fetch(`${API_BASE_URL}/api/recipes/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingredients: ingredientNames }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message || 'Erreur inconnue API');
    }
    
    return data.recipes || [];
  }
}
