import { Component } from '@angular/core';
import axios from 'axios';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})


export class PokedexComponent { 

   pokemons: any =[];

  constructor(){
    this.getPokemons();
  }
  

  getPokemons(){

    axios.get(' https://pokeapi.co/api/v2/pokemon')
    .then((e:any) => {
      this.pokemons.push(e.data.results);
    } 
      )

      const squareValues = this.pokemons.map((val: any) => val.url);
      console.log(squareValues);
   
  }
}
