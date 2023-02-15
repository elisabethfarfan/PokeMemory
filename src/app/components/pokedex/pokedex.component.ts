import { Component } from '@angular/core';
import axios from 'axios';
import { from, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { PokedexService } from './pokedex.service';
import { Pokedex } from './pokedexInterface';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})


export class PokedexComponent {

 public pokemons: Pokedex[] =[];


 constructor(public pokemonServicio:PokedexService){}

 ngOnInit(){

  for (let index = 1; index < 30; index++) {
    this.pokemonServicio.getPokemons(index).subscribe((res)=> { 
            this.pokemons = [...this.pokemons, 
              {
              id: '00'+ res.id,
              name: res.name,
              img:res.sprites.front_default
              }
            ]
          console.log(res);  

    }
    
  )
  }

 }


 

}
