import {Component, OnInit} from '@angular/core';
import {IngredientModel} from '../shared/Ingredient.model';
import {ShoppingService} from '../../services/shopping.service';

@Component({
  selector : 'app-shopping-list',
  templateUrl: 'shoppinglist.component.html',

  }

)

export class ShoppingList implements OnInit {
  ingridents: IngredientModel[];
  constructor(private shoppingList: ShoppingService) {

}
ngOnInit() {
    this.ingridents = this.shoppingList.getIngredient();
    this.shoppingList.ingredientChanged.subscribe(
      (ind: IngredientModel []) => {
        console.log('ingredient ' + ind);
        this.ingridents = ind;
      }
    );
}
}
