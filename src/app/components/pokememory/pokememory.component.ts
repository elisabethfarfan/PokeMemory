import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import cardsjson from '../../../../data/pokemon/pokemon.json';

interface pokemon {
  id: string,
  image: string,
  bgColor: string
}

@Component({
  selector: 'app-pokememory',
  templateUrl: './pokememory.component.html',
  styleUrls: ['./pokememory.component.css']
})

export class PokememoryComponent {
  pokeData : pokemon[] = cardsjson.items;
  arrayPokemonSelect: string[] = [];
  arrayDivsCard : any[] = [];

  hiddenCard(event:any, namePokemon: string){
    console.log(event.srcElement);
    console.log(namePokemon);

    // alcenando divs seleccionados
    this.arrayDivsCard.push(event.srcElement);
    console.log(this.arrayDivsCard);

    //añadiendo clase al div seleccionado para voltear
    this.renderer2.addClass(event.srcElement,"card-pokemon2-oculto");

    //almacenar pokemon seleccionado
    this.arrayPokemonSelect.push(namePokemon);

    if(this.arrayPokemonSelect.length === 2){
      if(this.arrayPokemonSelect[0] === this.arrayPokemonSelect[1]){
        console.log("son iguales");


        //vaciar los array de pokemon selecionados
        //nombres de pokemones
        this.arrayPokemonSelect = [];

        // elemento html de cartas seleccionadas
        this.arrayDivsCard=[];
      } else{
        console.log("son diferentes");

        setTimeout(() => {
          this.renderer2.removeClass(this.arrayDivsCard[0],"card-pokemon2-oculto");
          this.renderer2.removeClass(this.arrayDivsCard[1],"card-pokemon2-oculto");

          //vaciar los array de pokemon selecionados
          this.arrayPokemonSelect = [];
          this.arrayDivsCard=[];
          
        }, 3000);




      }

    }
  }

  hiddenImg(event:any, namePokemon: String){
    console.log(event);
    this.renderer2.addClass(event.srcElement.parentNode, "card-pokemon2-oculto");
  }

  constructor( private renderer2 : Renderer2 ){
    // duplicar las cartas
    this.pokeData = [...this.pokeData,...this.pokeData];

    //metodo que barajea aleatoriamente las cartas
    this.pokeData.sort( function(){ return Math.random() - 0.5});
  }

}
