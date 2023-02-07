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
    console.log(cardsjson.items);
  }

}
