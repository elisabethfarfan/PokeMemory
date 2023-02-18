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

  //cuenta click de icono audio
  contClickAudio: number = 0;
  audio:any = new Audio('../../../assets/musica_fondo.mp3');

  //timer
  minutos :number = 1;
  segundos: number = 0;

  executeInterval !: any;

  @ViewChild('containerAudio') containerAudi!: ElementRef;
  @ViewChild('buttonGame') buttonGam !: ElementRef;
  @ViewChild('containerCards') containerCards !: ElementRef;

  startGame(){
    console.log(this.containerAudi.nativeElement);
    this.renderer2.addClass(this.buttonGam.nativeElement,"container-audio-button");
    this.renderer2.addClass(this.containerAudi.nativeElement,"show-container-audio");
    this.renderer2.addClass(this.containerCards.nativeElement,"show-container-cards");
  }


  playAudio(){
    console.log(this.contClickAudio);

    if(this.contClickAudio === 0){
      this.contClickAudio = 1;
      console.log(this.contClickAudio);
      this.audio.play();
    } else{
      console.log("pause");
      this.audio.pause();
      this.contClickAudio=0;
    }
  }

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

    if(this.segundos-- === 0){
      this.segundos = 59;

      if(this.minutos-- === 0){
        this.minutos=1;
        this.segundos=0;

        //finaliza el timer
        clearInterval( this.executeInterval)
      }

     }

  }

  constructor( private renderer2 : Renderer2 ){
    console.log("hola");
    // duplicar las cartas
    this.pokeData = [...this.pokeData,...this.pokeData];

    //metodo que barajea aleatoriamente las cartas
    this.pokeData.sort( function(){ return Math.random() - 0.5});

    //ejecutar el timer
    // this.executeInterval = setInterval(() => this.timer(), 1000);
  }

}
