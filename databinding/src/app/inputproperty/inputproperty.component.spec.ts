import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputpropertyComponent } from './inputproperty.component';

describe('InputpropertyComponent', () => {
  let component: InputpropertyComponent;
  let fixture: ComponentFixture<InputpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
