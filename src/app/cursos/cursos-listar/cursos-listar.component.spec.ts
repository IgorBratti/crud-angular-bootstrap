import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosListarComponent } from './cursos-listar.component';

describe('CursosListarComponent', () => {
  let component: CursosListarComponent;
  let fixture: ComponentFixture<CursosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
