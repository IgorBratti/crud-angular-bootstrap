import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListarComponent } from './cursos-listar/cursos-listar.component';
import { CursosEditarComponent } from './cursos-editar/cursos-editar.component';
import { CursosCriarComponent } from './cursos-criar/cursos-criar.component';


@NgModule({
  declarations: [
    CursosListarComponent,
    CursosEditarComponent,
    CursosCriarComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
