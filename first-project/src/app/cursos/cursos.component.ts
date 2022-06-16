import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal:string;
  cursos:string[]=[
    'Node',
    'Angular',
    'Vue3'
  ]

  constructor() { 
    this.nomePortal = "http://loiane.training<"
  }

  ngOnInit(): void {
  }

}
