import { IIngredientRepository } from '../repositories/IIngredientRepository';
import { Ingredient } from '../entities/Ingredient';

export class GetPopularIngredientsUseCase {
  constructor(private ingredientRepository: IIngredientRepository) {}

  async execute(): Promise<Ingredient[]> {
    return this.ingredientRepository.getPopularIngredients();
  }
}
