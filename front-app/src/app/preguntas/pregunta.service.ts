import { Injectable } from '@angular/core';
import { pregunta } from './pregunta';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';


import { of } from 'rxjs';


@Injectable(
 // providedIn: 'root'
)
export class PreguntaService {
  private urlEndPoint:string = 'http://localhost:8080/api/preguntas';

  constructor(private http: HttpClient){ }


  getPreguntas(): Observable<pregunta[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as pregunta[])
    );
  }

}
