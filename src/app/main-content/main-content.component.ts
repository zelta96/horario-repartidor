import { RepartidorService } from './../services/repartidor.service';
import { Component, OnInit } from '@angular/core';
import { Repartidores } from 'src/model/repartidores.model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent  implements OnInit{
  repartidores: Repartidores[] = [];
  constructor(private repartidorService:RepartidorService){

  }

  ngOnInit(): void {
    this.repartidores = this.repartidorService.repartidores;
  }
  
}
