import { useState, useEffect, useMemo, useCallback } from 'react';
import { Ingredient } from '../../domain/entities/Ingredient';
import { Recipe } from '../../domain/entities/Recipe';
import { IngredientRepositoryImpl } from '../../data/repositories/IngredientRepositoryImpl';
import { RecipeRepositoryImpl } from '../../data/repositories/RecipeRepositoryImpl';
import { GetPopularIngredientsUseCase } from '../../domain/usecases/GetPopularIngredientsUseCase';
import { SearchIngredientsUseCase } from '../../domain/usecases/SearchIngredientsUseCase';
import { GenerateRecipesUseCase } from '../../domain/usecases/GenerateRecipesUseCase';

const ingredientRepository = new IngredientRepositoryImpl();
const recipeRepository = new RecipeRepositoryImpl();

const getPopularIngredientsUseCase = new GetPopularIngredientsUseCase(ingredientRepository);
const searchIngredientsUseCase = new SearchIngredientsUseCase(ingredientRepository);
const generateRecipesUseCase = new GenerateRecipesUseCase(recipeRepository);

export const MAX_SELECTION = 6;

export const useIngredientSelection = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [generatedRecipes, setGeneratedRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const data = await getPopularIngredientsUseCase.execute();
        setIngredients(data);
      } catch (err) {
        setError('Erreur de chargement des ingrédients.');
      }
    };
    fetchPopular();
  }, []);

  const handleSearchChange = useCallback(async (query: string) => {
    setSearchQuery(query);
    try {
      const results = await searchIngredientsUseCase.execute(query);
      setIngredients(results);
    } catch (err) {
      setError('Erreur lors de la recherche.');
    }
  }, []);

  const toggleIngredient = useCallback((name: string) => {
    setSelectedIngredients(prev => {
      if (prev.includes(name)) {
        return prev.filter(item => item !== name);
      }
      if (prev.length >= MAX_SELECTION) {
        return prev;
      }
      return [...prev, name];
    });
  }, []);

  const generateRecipes = useCallback(async () => {
    if (selectedIngredients.length === 0) return;
    setIsLoading(true);
    setError(null);
    try {
      const recipes = await generateRecipesUseCase.execute(selectedIngredients);
      setGeneratedRecipes(recipes);
    } catch (err: any) {
      setError(err.message || 'Erreur lors de la génération.');
    } finally {
      setIsLoading(false);
    }
  }, [selectedIngredients]);

  return {
    ingredients,
    selectedIngredients,
    searchQuery,
    generatedRecipes,
    isLoading,
    error,
    MAX_SELECTION,
    handleSearchChange,
    toggleIngredient,
    generateRecipes,
  };
};
