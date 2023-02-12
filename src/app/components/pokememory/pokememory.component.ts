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

  changeCard(event:any){
    console.log(event.srcElement);
    this.renderer2.addClass(event.  ,"card-pokemon2-oculto");
  }

  constructor( private renderer2 : Renderer2 ){
    this.pokeData = [...this.pokeData,...this.pokeData];
    this.pokeData.sort( function(){ return Math.random() - 0.5});
  }

 
}
