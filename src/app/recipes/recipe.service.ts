import { EventEmitter } from "@angular/core";
import { Recipe } from "./recepie.model"
import { Ingredient } from "../shared/ingredient.model";
import { Injectable } from '@angular/core';
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {


  private recipes: Recipe[] = [
    new Recipe('Pancakes', 'Super tasty pancakes', 'https://www.marthastewart.com/thmb/hYBu4WxREoHdCZ4l_8ryGZjqMLQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-basic-pancakes-horiz-1022_0-f13ba897aba6423db7901ca826595244.jpgitokXQMZkp_j', [
      new Ingredient('eggs', 1),
      new Ingredient('water', 3),
      new Ingredient('sugar', 2)
    ] ),
    new Recipe('Burger', 'Super smash burger', 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_50,w_1900/hellofresh_s3/image/HF210603_R15_W29_SE_R12344114-1_KB_Main_low-bb2e5077.jpg', [
      new Ingredient('meat', 1),
      new Ingredient('bread', 2),
      new Ingredient('cheese', 1)
    ] )

  ]

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  constructor(private shoppingListService: ShoppingListService) { }
}
