import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private API_POKEMON = "https://pokeapi.co/api/v2/pokemon/";


  constructor(public http:HttpClient) { }

  public getPokemons(index:number): Observable<any>{

    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${index}`);
  }


}
