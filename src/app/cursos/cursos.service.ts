import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Curso } from './cursos';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private API = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Curso[]>(this.API).pipe(tap(console.log));
  }
}
