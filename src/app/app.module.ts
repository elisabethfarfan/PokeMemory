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
import { PokedexService } from './components/pokedex/pokedex.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalPokedexComponent } from './components/pokedex/modal-pokedex/modal-pokedex.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

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
    ModalPokedexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    [SweetAlert2Module.forRoot()],
  ],
  providers: [
    PokedexService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
