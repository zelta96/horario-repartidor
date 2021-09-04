import { LogsSystemService } from './../services/logs-system.service';
import { Component,OnInit } from '@angular/core';
import { Repartidores } from 'src/model/repartidores.model';
import { RepartidorService } from '../services/repartidor.service';

@Component({
  selector: 'app-form-repartidor',
  templateUrl: './form-repartidor.component.html',
  styleUrls: ['./form-repartidor.component.scss']
})
export class FormRepartidorComponent implements OnInit{
  
  
  constructor(private log:LogsSystemService, private repartidoresService: RepartidorService){

  }

  ngOnInit(){
  }

  agregarPersona(nombreInput:HTMLInputElement,apellidoInput:HTMLInputElement){
    let persona = new Repartidores(nombreInput.value,apellidoInput.value);
    this.log.log("Agregamos a: " + nombreInput.value);
    this.repartidoresService.repartidorAgregado(persona);
    //this.persona.emit(persona);
  }

}
