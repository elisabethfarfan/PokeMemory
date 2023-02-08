import { Component } from '@angular/core';
import axios from 'axios';
import { from, of } from 'rxjs';
import { map } from 'rxjs/operators';

// interface Poke {
//   name: string,
//   url:string
// }

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})


export class PokedexComponent {

  pokemon: Array<any> = [];
  // pokemon:Poke[] = []

  constructor(){
    this.getPokemon();
  }
  poke = from(this.pokemon);

  getPokemon(){
    // const pokemon: Array<any> =[];

    const apiPokemons = "https://pokeapi.co/api/v2/pokemon/";

     // capturar nombre del pokemon
    axios.get(apiPokemons)
    .then((res:any)=>{
      this.pokemon.push(res.data.results);
    });

    console.log(this.poke);



    this.poke.pipe(map(pok => {return pok.url}))
    .subscribe(res => {console.log(res)});


    //modificar el url final a la propiedad pokemon
    // console.log(pokemon);
    // const arrayPokemon = this.pokemon.map((e)=> {
    // return e.name + "hola";
    //       //  axios.get(e.url)
    //   //  .then((u)=>{
    //   //    console.log(u);
    //   //  })
    // });


  }


}
