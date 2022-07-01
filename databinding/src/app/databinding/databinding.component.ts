import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

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
