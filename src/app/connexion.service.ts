import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  public toto;

  constructor() {
  this.toto = false;}
}
