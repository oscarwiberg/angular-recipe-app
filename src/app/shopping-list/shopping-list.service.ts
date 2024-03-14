import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Test ingredient', 250),
    new Ingredient('Test ingredient 2', 350),
    new Ingredient('Test ingredient 3', 450)
  ];

  getIngredients(){
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    
  }

  constructor() { }

}
