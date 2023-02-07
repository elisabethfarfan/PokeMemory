import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { PreviaCardsComponent } from './components/previa-cards/previa-cards.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { HomeComponent } from './components/home/home.component';
import { PokememoryComponent } from './components/pokememory/pokememory.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    PreviaCardsComponent,
    PokedexComponent,
    HomeComponent,
    PokememoryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
