import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputpropertyComponent } from './outputproperty.component';

describe('OutputpropertyComponent', () => {
  let component: OutputpropertyComponent;
  let fixture: ComponentFixture<OutputpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
