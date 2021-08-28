import { Component } from '@angular/core';
import { Repartidores } from 'src/model/repartidores.model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.sass']
})
export class MainContentComponent  {
  repartidores: Repartidores[] = [new Repartidores('juan','perez'),new Repartidores('alicia','lopez'),];
}
