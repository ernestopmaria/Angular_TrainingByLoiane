import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './outputproperty.component.html',
  styleUrls: ['./outputproperty.component.css'],
})
export class OutputpropertyComponent implements OnInit {
  constructor() {}
  @Input('valor') valor: number;

  @Output() mudouValor = new EventEmitter();

  ngOnInit(): void {}

  increment() {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrement() {
    this.mudouValor.emit({ novoValor: this.valor });
    if (this.valor == 0) {
      return this.valor - 0;
    }
    return this.valor--;
  }
}
