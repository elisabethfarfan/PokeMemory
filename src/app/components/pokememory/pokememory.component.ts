import { Component, Directive, ElementRef, Renderer2, ViewChild } from '@angular/core';
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
  isDisabled: boolean = false;

  compareCards(element:any, namePokemon :string){

    // alcenando divs seleccionados
    this.arrayDivsCard.push(element);
    console.log(this.arrayDivsCard);

    //añadiendo clase al div seleccionado para voltear
    this.renderer2.addClass(element,"card-pokemon2-oculto");

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

          //habilitar eventos
          this.isDisabled= false;

          console.log(this.isDisabled);

        }, 3000);
        //deshabilitar eventos
        this.isDisabled= true;
      }
    }
  }

  hiddenCard(event:any, namePokemon: string){

    this.compareCards(event.srcElement, namePokemon);
  }

  hiddenImg(event:any, namePokemon: string){
    // console.log(event);
    // this.renderer2.addClass(event.srcElement.parentNode, "card-pokemon2-oculto");

    this.compareCards(event.srcElement.parentNode, namePokemon);
  }

  timer(){
    //duracion del juego(minutos)
    let cont = 5

    for(let i = 0; i < cont; i++){
      setTimeout(() => {
        cont = cont -1;
      },10000);
      console.log(cont);
    }

  }

  constructor( private renderer2 : Renderer2 ){
    // duplicar las cartas
    this.pokeData = [...this.pokeData,...this.pokeData];

    //metodo que barajea aleatoriamente las cartas
    this.pokeData.sort( function(){ return Math.random() - 0.5});

    this.timer();
  }

}
