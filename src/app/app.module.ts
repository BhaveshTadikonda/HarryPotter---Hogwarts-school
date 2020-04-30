import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules/modules.component';
import { SourcesComponent } from './sources/sources.component';
import { GameComponent } from './game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

// Identifying the class as an Angular module by attaching @NgModule decorator with metadata defining the deatils.
//  declarations declare which of the components belong to the module in Array,
// Imports we declare all external modules to all of the components in this module are declared in Array.
// Boot strap include startup component of page
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModulesComponent,
    SourcesComponent,
    GameComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// defining angular module using a class
export class AppModule { }
