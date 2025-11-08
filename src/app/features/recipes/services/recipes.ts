import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../ core/constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class Recipes {
  private readonly http = inject(HttpClient);

  getAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(API_ENDPOINTS.RECIPES);
  }

  add(recipe: Recipe): Observable<void> {
    return this.http.post<void>(API_ENDPOINTS.RECIPES, recipe);
  }
  
}
