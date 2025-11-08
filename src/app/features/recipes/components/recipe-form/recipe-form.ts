import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Recipe } from '../../models/recipe.model';
import { Recipes } from '../../services/recipes';
import { Category } from '../../models/category.enum';

@Component({
  selector: 'app-recipe-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-form.html',
  styleUrl: './recipe-form.scss',
})
export class RecipeFormComponent {
  private readonly service = inject(Recipes);
  private readonly fB = inject(NonNullableFormBuilder);

  form = this.fB.group({
    title: [''],
    description: [''],
    category: [''],
    prepTime: [''],
    cookTime: [''],
    servings: [''],
  })

  addRecipe(): void {
    const recipe: Recipe = {
      id: '1',
      ingredients: [],
      steps: [],
      title: this.form.controls.title.value,
      description : '',
      category: Category.BREAKFAST,
      prepTime: 2,
      cookTime: 2,
      servings: 2      
    }

    console.log(recipe);
    this.service.add(recipe).subscribe();

  }
}
