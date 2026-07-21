from pydantic import BaseModel
from typing import List, Optional

class Step(BaseModel):
    order: int
    instruction: str

class Recipe(BaseModel):
    id: str
    title: str
    description: str
    mealType: str
    ingredients: List[str]
    steps: List[Step]

class RecipeResponse(BaseModel):
    success: bool
    recipes: Optional[List[Recipe]] = None
    error_type: Optional[str] = None
    message: Optional[str] = None

class GenerateRecipeRequest(BaseModel):
    ingredients: List[str]
