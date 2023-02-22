import { Component, Input } from '@angular/core';
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
  modalSwitch!: boolean;



 constructor(public pokemonServicio:PokedexService, private modalServicio :PokedexService){}

  ngOnInit(){
    this.modalServicio.$modalPokedex.subscribe(res => {
      this.modalSwitch = res;
      console.log(this.modalSwitch);
      
    })

      for (let index = 1; index <= 30; index++) {
        this.pokemonServicio.getPokemons(index).subscribe((res)=> {
                this.pokemons = [...this.pokemons,
                  {
                  id: '00'+ res.id,
                  name: res.name,
                  img: res.sprites.front_default,
                  abilities: res.abilities.map((elemen:any) => elemen.ability.name),
                  }
                ]
        })
      }

      // asiganmos el nuevo valor de this.modalSwitch dependiendo de si abre o cierra
    
  }

 public openModal(index:number){
  this.modalSwitch = true;
  let idPokemon = index;
  console.log('abriendo modal', this.modalSwitch, index);
  
 }


}
