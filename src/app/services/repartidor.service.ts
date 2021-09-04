import { Injectable } from '@angular/core';
import { Repartidores } from 'src/model/repartidores.model';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {
  repartidores: Repartidores[] = [new Repartidores('juan','perez'),new Repartidores('alicia','lopez')];
  constructor() { }
  
  repartidorAgregado(repartidor:Repartidores){
    this.repartidores.push(repartidor);
    console.log(this.repartidores)
  }
}
