import {RecipeModel} from '../app/recepies/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {ShoppingService} from './shopping.service';
import {IngredientModel} from '../app/shared/Ingredient.model';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();
  private recipe: RecipeModel[] =
  [
    new RecipeModel(  'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('French Fries', 20)
      ])
, new RecipeModel('Big Fat Burger',
    'What else you need to say?',
    'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    [
      new IngredientModel('Buns', 2),
      new IngredientModel('Meat', 1)
    ])
];
  getRecipe(){
    return this.recipe.slice();
  }

  constructor(private shoppingList: ShoppingService) {

  }

  onindAdded(ind: IngredientModel []){
  this.shoppingList.addIndIntoShoppinglist(ind);
  }
}
