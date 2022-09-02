import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './outputproperty.component.html',
  styleUrls: ['./outputproperty.component.css'],
})
export class OutputpropertyComponent implements OnInit {
  constructor() {}
  @Input('valor') valor: number;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  ngOnInit(): void {}

  increment() {
    console.log(this.campoValorInput.nativeElement.value);
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.campoValorInput });
  }

  decrement() {
    this.mudouValor.emit({ novoValor: this.valor });
    if (this.campoValorInput.nativeElement.value == 0) {
      return this.campoValorInput.nativeElement.value - 0;
    }
    return this.campoValorInput.nativeElement.value--;
  }
}
