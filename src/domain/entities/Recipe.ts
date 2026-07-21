export interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  difficulty: 'facile' | 'moyen' | 'difficile';
  matchingIngredientsCount: number;
  totalIngredientsCount: number;
  ingredients: string[];
  instructions: string[];
  imageUrl?: string;
}
