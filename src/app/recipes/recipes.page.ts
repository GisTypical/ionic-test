import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Quesillo',
      imgUrl: 'https://comidasvenezolanas.net/wp-content/uploads/2021/05/quesillo-venezolano.jpg',
      ingredients: ['eggs', 'flour', 'vanilla', 'ron'],
    },
    {
      id: 'r2',
      title: 'Cake',
      imgUrl: 'https://d1uz88p17r663j.cloudfront.net/resized/c216893fca0edca08430e8acc9dc1b51_Torta_Naked_1200_600.jpg',
      ingredients: ['flour', 'eggs', 'butter', 'sugar']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
