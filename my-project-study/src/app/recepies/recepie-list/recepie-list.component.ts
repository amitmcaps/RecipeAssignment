import {Component, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';
import {RecipeService} from '../../../services/recipe.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  recipes: RecipeModel[] = [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
    console.log(' this.recipes  ' +  this.recipes );
  }
}
