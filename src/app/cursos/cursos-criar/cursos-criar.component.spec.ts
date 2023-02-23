import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCriarComponent } from './cursos-criar.component';

describe('CursosCriarComponent', () => {
  let component: CursosCriarComponent;
  let fixture: ComponentFixture<CursosCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosCriarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
