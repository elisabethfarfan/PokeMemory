import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { PreviaCardsComponent } from './components/previa-cards/previa-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokeMemoryComponent } from './components/poke-memory/poke-memory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    PreviaCardsComponent,
    FooterComponent,
    PokeMemoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
