import {IngredientModel} from '../app/shared/Ingredient.model';
import {ElementRef, EventEmitter, ViewChild} from '@angular/core';

export class ShoppingService{
   private ingridents: IngredientModel[] = [
    new IngredientModel('Apple', 5),
    new IngredientModel('Tomato', 10)
  ];
   ingregientAdded = new EventEmitter<IngredientModel>();
   ingredientChanged = new EventEmitter<IngredientModel []>();

  onIndAdded(ind: IngredientModel) {
    this.ingridents.push(ind);
    this.ingredientChanged.emit(this.ingridents.slice());
  }
  getIngredient(){
    return this.ingridents.slice();
  }
  addIndIntoShoppinglist(ind: IngredientModel []){
    this.ingridents.push(...ind);
    this.ingredientChanged.emit(this.ingridents.slice());
      }
}
