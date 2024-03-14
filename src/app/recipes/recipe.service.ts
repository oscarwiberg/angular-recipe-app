import { EventEmitter } from "@angular/core";
import { Recipe } from "./recepie.model"
import { Ingredient } from "../shared/ingredient.model";
import { Injectable } from '@angular/core';
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>;

  private recipes: Recipe[] = [
    new Recipe('Pancakes', 'Super tasty pancakes', 'https://www.marthastewart.com/thmb/hYBu4WxREoHdCZ4l_8ryGZjqMLQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-basic-pancakes-horiz-1022_0-f13ba897aba6423db7901ca826595244.jpgitokXQMZkp_j', [
      new Ingredient('eggs', 1),
      new Ingredient('water', 3),
      new Ingredient('sugar', 2)
    ] ),
    new Recipe('Burger', 'Super smash burger', 'https://www.marthastewart.com/thmb/8gzfd5woDpEDMFrzrRefp4Ye-S8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/04edf_bestburger_vert-b4226c48235e478f88d2d346ddf37d97.jpgitokeL-bvuyL', [
      new Ingredient('meat', 1),
      new Ingredient('bread', 2),
      new Ingredient('cheese', 1)
    ] )

  ]

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  constructor(private shoppingListService: ShoppingListService) { }
}
