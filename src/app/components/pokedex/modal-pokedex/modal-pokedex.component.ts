import { Component } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Pokedex } from '../pokedexInterface';

@Component({
  selector: 'app-modal-pokedex',
  templateUrl: './modal-pokedex.component.html',
  styleUrls: ['./modal-pokedex.component.css']
})
export class ModalPokedexComponent {

  
  constructor(private modalService : PokedexService){}

  closeModal(){
    // emitimos el valor del modal para cerrar 
    this.modalService.$modalPokedex.emit(false);
    console.log('cerrando modal',this.modalService.$modalPokedex.closed);
    
  }

  

}
