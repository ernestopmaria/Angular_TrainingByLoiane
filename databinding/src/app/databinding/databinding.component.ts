import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {
  valorActual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';

  pessoa: any = {
    nome: 'Ernesto',
    idade: 20,
  };

  nomeDoCurso: string = 'Angular';
  valor: number = 10;

  onKeyUp(evento: KeyboardEvent) {
    this.valorActual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  ngOnInit(): void {}
}
