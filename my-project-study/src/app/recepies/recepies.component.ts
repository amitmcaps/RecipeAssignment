import { Component, OnInit } from '@angular/core';
import {RecipeModel} from './recipe.model';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecipeService]
})
export class RecepiesComponent implements OnInit {
  constructor(private recipeService: RecipeService) { }
  selectedRecipeService: RecipeModel;
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: RecipeModel) => {
        console.log(' recipe is ' +  recipe);
        this.selectedRecipeService = recipe;
      }
    );
  }

}
