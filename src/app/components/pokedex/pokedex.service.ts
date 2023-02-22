import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private API_POKEMON = "https://pokeapi.co/api/v2/pokemon/";
  
  // objeto Observable
  $modalPokedex = new EventEmitter<any>();

  constructor(public http:HttpClient) { }

  public getPokemons(index:number): Observable<any>{

    return this.http.get(this.API_POKEMON+`${index}`);
  }


}
