import { Component, NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bootstrap-example';

  lista:any = [];
  constructor(){
    //nothing tu put here yet
  }

  ngOnInit(){
    this.lista = [
      {
        "id": "1",
        "nome": "Cyntia",
        "senha": "secret123"
      },
      {
        "id": "1",
        "nome": "Ingrid",
        "senha": "secret321"
      }
    ]
  }

  functionClick(){
    console.log('oi');
  }
}


