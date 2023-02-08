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
  nameDiv ?: string | undefined = '';

  @ViewChild('cardpokemon2') myCard!: ElementRef;


  // voltearCard(i:number){
  //   console.log("click",i);
  //   this.eventClick = true;
  //   this.nameDiv =`cardpokemon${i}`;
  // }
  changeCard(){
    const div = this.myCard.nativeElement;
    console.log(div);
  }

  constructor( private renderer2 : Renderer2 ){
    this.pokeData = [...this.pokeData,...this.pokeData];
    this.pokeData.sort( function(){ return Math.random() - 0.5});
  }

}
