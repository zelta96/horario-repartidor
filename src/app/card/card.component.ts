import { Repartidores } from './../../model/repartidores.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() reparetidorData:Repartidores = new Repartidores("","");
  constructor() { }

  ngOnInit(): void {
  }

}
