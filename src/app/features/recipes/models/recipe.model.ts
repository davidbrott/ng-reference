import { Category } from "./category.enum";
import { Ingredient } from "./ingredient.model";

export interface Recipe {
    id: string;
    title: string;
    description: string;
    ingredients: Ingredient[];
    steps: string[];
    category: Category;
    prepTime: number;
    cookTime: number;
    servings: number;
    imageUrl?: string;
    favorite?: boolean;
}