import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { HomeComponent } from './components/home/home.component';
import { PokememoryComponent } from './components/pokememory/pokememory.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'pokedex', component: PokedexComponent},
  {path:'pokememory', component: PokememoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
