import { Component, OnInit, Input } from '@angular/core';
import {RecipeModel} from '../recipe.model';
import {RecipeService} from '../../../services/recipe.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
@Input() recipe: RecipeModel;
  constructor( private recipeService: RecipeService) { }

  ngOnInit() {

  }
  onAddedToShoppingList(){
    this.recipeService.onindAdded(this.recipe.ingredients);
  }
}


