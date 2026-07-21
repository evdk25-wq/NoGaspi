from fastapi import FastAPI
from models.recipe import GenerateRecipeRequest, RecipeResponse
from services.recipe_service import generate_recipes_logic

app = FastAPI(
    title="NoGaspi API",
    description="API pour générer des recettes anti-gaspillage",
    version="1.0.0"
)

@app.get("/")
def read_root():
    return {"message": "Bienvenue sur l'API NoGaspi ! L'API est en ligne."}

@app.post("/api/recipes/generate", response_model=RecipeResponse)
def generate_recipes(request: GenerateRecipeRequest):
    return generate_recipes_logic(request.ingredients)
