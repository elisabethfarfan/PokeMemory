import { Component, Input } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Pokedex } from '../pokedexInterface';

@Component({
  selector: 'app-modal-pokedex',
  templateUrl: './modal-pokedex.component.html',
  styleUrls: ['./modal-pokedex.component.css']
})
export class ModalPokedexComponent {

  @Input() infoPokemon:Pokedex[]=[{
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
];

  constructor(private modalService : PokedexService){
    
  }

  
  closeModal(){
    // emitimos el valor del modal para cerrar 
    this.modalService.$modalPokedex.emit(false);
    console.log('modal hijo', this.infoPokemon);
  
  }

  

}
