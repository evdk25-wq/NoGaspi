import { IIngredientRepository } from '../repositories/IIngredientRepository';
import { Ingredient } from '../entities/Ingredient';

export class SearchIngredientsUseCase {
  constructor(private ingredientRepository: IIngredientRepository) {}

  async execute(query: string): Promise<Ingredient[]> {
    return this.ingredientRepository.searchIngredients(query);
  }
}
