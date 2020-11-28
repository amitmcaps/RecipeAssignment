import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ShoppingList} from './shoppinglist/shoppinglist.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListEditComponent } from './shoppinglist/shopping-list-edit/shopping-list-edit.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import {RecipeListItemComponent} from './recepies/recepie-list/recipe-list-item/recipe-list-item.component';
import { DropDownDirective } from './shared/drop-down.directive';
import {ShoppingService} from '../services/shopping.service';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingList,
    HeaderComponent,
    ShoppingListEditComponent,
    RecepiesComponent,
    RecepieListComponent,
    RecepieDetailComponent,
    RecipeListItemComponent,
    DropDownDirective,

  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
