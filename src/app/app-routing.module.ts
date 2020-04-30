import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules/modules.component';
import { SourcesComponent } from './sources/sources.component';
import { GameComponent } from './game/game.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'modules', component: ModulesComponent },
  { path: 'sources', component: SourcesComponent },
  { path: 'game', component: GameComponent },
  { path: 'form', component: FormComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
