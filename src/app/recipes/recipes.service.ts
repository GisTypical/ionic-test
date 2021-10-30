import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Quesillo',
      imgUrl:
        'https://comidasvenezolanas.net/wp-content/uploads/2021/05/quesillo-venezolano.jpg',
      ingredients: ['eggs', 'flour', 'vanilla', 'ron'],
    },
    {
      id: 'r2',
      title: 'Cake',
      imgUrl:
        'https://d1uz88p17r663j.cloudfront.net/resized/c216893fca0edca08430e8acc9dc1b51_Torta_Naked_1200_600.jpg',
      ingredients: ['flour', 'eggs', 'butter', 'sugar'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return { ...this.recipes.find((recipe) => recipe.id === recipeId) };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
  }
}
