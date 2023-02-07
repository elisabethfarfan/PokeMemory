import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { HomeComponent } from './components/home/home.component';
import { PokememoryComponent } from './components/pokememory/pokememory.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'pokedex', component: PokedexComponent},
  {path:'pokememory', component: PokememoryComponent}
=======
import { PokeMemoryComponent } from './components/poke-memory/poke-memory.component';

const routes: Routes = [
  { path: 'pokeMemory', component: PokeMemoryComponent }
>>>>>>> 9f0efe8161b547cbe49af92d710f0aa2329c611b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
