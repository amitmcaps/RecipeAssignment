import {Component, Input, OnInit} from '@angular/core';
import { RecipeModel } from '../../recipe.model';
import {RecipeService} from '../../../../services/recipe.service';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {

@Input() recipe: RecipeModel;
  constructor(private recipeService: RecipeService) { }
  ngOnInit(){
  }
  onRecipeList() {
    console.log('this.recipeList ' + this.recipe.name);
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
