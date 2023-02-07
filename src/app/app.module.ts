import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { PreviaCardsComponent } from './components/previa-cards/previa-cards.component';
<<<<<<< HEAD
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { HomeComponent } from './components/home/home.component';
import { PokememoryComponent } from './components/pokememory/pokememory.component';
=======
import { FooterComponent } from './components/footer/footer.component';
import { PokeMemoryComponent } from './components/poke-memory/poke-memory.component';
>>>>>>> 9f0efe8161b547cbe49af92d710f0aa2329c611b

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    PreviaCardsComponent,
<<<<<<< HEAD
    PokedexComponent,
    HomeComponent,
    PokememoryComponent
=======
    FooterComponent,
    PokeMemoryComponent
>>>>>>> 9f0efe8161b547cbe49af92d710f0aa2329c611b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
