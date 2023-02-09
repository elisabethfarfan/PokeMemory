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
  eventClick: boolean = false;


  // voltearCard(i:number){
  //   console.log("click",i);
  //   this.eventClick = true;
  //   this.nameDiv =`cardpokemon${i}`;
  // }
 

  constructor( private renderer2 : Renderer2 ){
    this.pokeData = [...this.pokeData,...this.pokeData];
    this.pokeData.sort( function(){ return Math.random() - 0.5});
  }

  changeCard(index:number){
    console.log('volteando elemento el index', index);
    
  }
}
