import { Component } from '@angular/core';
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

  constructor(){
    this.pokeData = [...this.pokeData,...this.pokeData];
    this.pokeData.sort( function(){ return Math.random() - 0.5});
    console.log(Math.random());
  }

}
