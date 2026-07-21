import { IIngredientRepository } from '../../domain/repositories/IIngredientRepository';
import { Ingredient } from '../../domain/entities/Ingredient';
import { INITIAL_INGREDIENTS } from '../sources/mockIngredients';

export class IngredientRepositoryImpl implements IIngredientRepository {
  async getPopularIngredients(): Promise<Ingredient[]> {
    return INITIAL_INGREDIENTS.filter(item => item.isPopular);
  }

  async searchIngredients(query: string): Promise<Ingredient[]> {
    const cleanQuery = query.toLowerCase().trim();
    if (!cleanQuery) {
      return this.getPopularIngredients();
    }
    return INITIAL_INGREDIENTS.filter(item =>
      item.name.toLowerCase().includes(cleanQuery)
    );
  }
}
