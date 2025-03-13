import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAnyadirComponent } from './formulario-anyadir.component';

describe('FormularioAnyadirComponent', () => {
  let component: FormularioAnyadirComponent;
  let fixture: ComponentFixture<FormularioAnyadirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAnyadirComponent]
    });
    fixture = TestBed.createComponent(FormularioAnyadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
