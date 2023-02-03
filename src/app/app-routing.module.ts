import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeMemoryComponent } from './components/poke-memory/poke-memory.component';

const routes: Routes = [
  { path: 'pokeMemory', component: PokeMemoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
