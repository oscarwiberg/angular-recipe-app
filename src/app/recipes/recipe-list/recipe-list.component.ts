import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recepie.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Test description', 'https://www.marthastewart.com/thmb/hYBu4WxREoHdCZ4l_8ryGZjqMLQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-basic-pancakes-horiz-1022_0-f13ba897aba6423db7901ca826595244.jpgitokXQMZkp_j' ),
    new Recipe('Another Test recipe', 'Test description', 'https://www.marthastewart.com/thmb/hYBu4WxREoHdCZ4l_8ryGZjqMLQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-basic-pancakes-horiz-1022_0-f13ba897aba6423db7901ca826595244.jpgitokXQMZkp_j' )

  ]

  

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

}
