import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string="http://loiane.com";
  cursoAngular:boolean=true;
  urlImage = 'https://picsum.photos/seed/picsum/400/300'
  constructor() { }

  getValor(){
      return 2 + 1
  }
  getCurtirCurso(){
    return true
  }

  ngOnInit(): void {

 
  }

}
