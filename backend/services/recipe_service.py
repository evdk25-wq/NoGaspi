from typing import List
from models.recipe import RecipeResponse, Recipe, Step

# Liste basique de condiments qui ne suffisent pas pour faire un vrai plat
CONDIMENTS = [
    "sel", "poivre", "huile", "beurre", "vinaigre", "sucre", 
    "ail", "persil", "basilic", "moutarde"
]

def generate_recipes_logic(ingredients: List[str]) -> RecipeResponse:
    # Nettoyage des ingrédients (mise en minuscules pour la comparaison)
    ingredients_lower = [i.lower().strip() for i in ingredients]
    
    # Validation : vérifier s'il n'y a QUE des condiments
    only_condiments = all(item in CONDIMENTS for item in ingredients_lower)
    
    if only_condiments:
        return RecipeResponse(
            success=False,
            error_type="INSUFFICIENT_INGREDIENTS",
            message="Vous n'avez sélectionné que des condiments ! Ajoutez au moins un ingrédient principal (légume, viande, féculent) pour qu'on vous trouve un vrai repas."
        )
    
    # Si la validation passe, on charge les recettes depuis le fichier JSON fourni par l'utilisateur
    import json
    import os
    
    # Path to the data file
    data_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'recipes.json')
    
    try:
        with open(data_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        all_recipes_data = data.get('recipes', [])
        
        # Filtre basique : trouver les recettes qui contiennent au moins un des ingrédients
        # Dans un vrai système, on utiliserait un algorithme plus poussé ou une IA
        matching_recipes = []
        for recipe_data in all_recipes_data:
            recipe_ingredients = [ri.lower() for ri in recipe_data.get('ingredients', [])]
            # Si un des ingrédients de l'utilisateur est dans les ingrédients de la recette
            # (Recherche basique par sous-chaîne)
            match_score = 0
            for user_ing in ingredients_lower:
                for rec_ing in recipe_ingredients:
                    if user_ing in rec_ing:
                        match_score += 1
            
            if match_score > 0:
                matching_recipes.append(recipe_data)
        
        # Si on ne trouve rien avec le filtre exact, on renvoie quelques recettes au hasard
        if not matching_recipes:
            import random
            matching_recipes = random.sample(all_recipes_data, min(3, len(all_recipes_data)))
            
        # Parse into Pydantic models
        parsed_recipes = [Recipe(**r) for r in matching_recipes]
        
        return RecipeResponse(
            success=True,
            recipes=parsed_recipes
        )
    except Exception as e:
        return RecipeResponse(
            success=False,
            error_type="INTERNAL_ERROR",
            message=f"Erreur lors de la lecture des recettes: {str(e)}"
        )
