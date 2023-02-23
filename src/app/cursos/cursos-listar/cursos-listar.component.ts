import { Curso } from './../cursos';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-listar',
  templateUrl: './cursos-listar.component.html',
  styleUrls: ['./cursos-listar.component.css'],
  preserveWhitespaces: true
})
export class CursosListarComponent implements OnInit {

  constructor(private service: CursosService) { }

  public cursos!: Curso[];

  ngOnInit() {
    this.service.list().subscribe(dados => this.cursos = dados);
  }

}
