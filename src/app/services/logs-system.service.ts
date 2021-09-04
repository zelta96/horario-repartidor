import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsSystemService {

  constructor() { }

  log(cadena:any){
    return console.log(cadena);
  }
}
