import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './inputproperty.component.html',

})
export class InputpropertyComponent implements OnInit {

@Input('nome') 
  nomeDoCurso:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
