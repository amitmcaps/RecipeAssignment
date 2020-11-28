import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/Ingredient.model';
import {ShoppingService} from '../../../services/shopping.service';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('indName')indNameRef: ElementRef;
  @ViewChild('indAmount')indAmountRef: ElementRef;
  constructor(private shoppingList: ShoppingService) {
  }

  ngOnInit(): void {
  }
  onAddItem() {
const nameRef = this.indNameRef.nativeElement.value;
const amountRef = this.indAmountRef.nativeElement.value;
const indAddede = new IngredientModel(nameRef, amountRef);
this.shoppingList.onIndAdded(indAddede);
  }

}
