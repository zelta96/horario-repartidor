import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'horario-repartidor';
  faCoffee = faCoffee;
  mode = new FormControl('over');
  showFiller = false;
}
