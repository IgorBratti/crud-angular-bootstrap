import { CursosEditarComponent } from './cursos-editar/cursos-editar.component';
import { CursosCriarComponent } from './cursos-criar/cursos-criar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosListarComponent } from './cursos-listar/cursos-listar.component';

const routes: Routes = [
  { path: '', component: CursosListarComponent },
  { path: 'novo', component: CursosCriarComponent },
  { path: 'editar', component: CursosEditarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
