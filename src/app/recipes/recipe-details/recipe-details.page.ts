import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  recipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrlr: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.recipe = this.recipesService.getRecipe(recipeId);
      if (Object.keys(this.recipe).length === 0) {
        this.router.navigate(['/recipes']);
      }
    });
  }

  async deleteRecipe() {
    const alert = await this.alertCtrlr.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(this.recipe.id);
            this.router.navigate(['/recipes']);
          },
        },
      ],
    });

    await alert.present();
  }
}
