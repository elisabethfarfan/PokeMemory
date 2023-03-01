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
  pokemonSelect:Pokedex[]=[{
    id: '',
    name:'',
    img: '',
    abilities:'',
    // generation: Object ;
    // about: string ;
    // size: Object ;
    // pokemonRarity: string ;
    // type: Array<String> ;
    // encounter: Object ;
    // spawnChance: string;
    // stats: Object ;
    // resistant: Array<String> ;
    // weaknesses: Array<String> ;
    // quickMove: Array<Object>  ;
    // specialAttack: Array<Object> ;
    // buddyDistanceKm: string;
    // evolution: Object;
  
    }
];;

 constructor(public pokemonServicio:PokedexService, private modalServicio :PokedexService){}

  ngOnInit(){
    this.modalServicio.$modalPokedex.subscribe(res => {
      this.modalSwitch = res;
   
    })

      for (let index = 1; index <= 30; index++) {
        this.pokemonServicio.getPokemons(index).subscribe((res)=> {
          console.log(res);
          
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

 public openModal(index:string) {
  this.modalSwitch = true;
  let idPokemon = parseInt(index);
  this.modalServicio.getPokemons(idPokemon).subscribe(res =>{
      this.pokemonSelect = [
        {
        id: '00'+ res.id,
        name: res.name,
        img: res.sprites.front_default,
        abilities: res.abilities.map((elemen:any) => elemen.ability.name),
        }
      ]
})
  
  
 }


}
