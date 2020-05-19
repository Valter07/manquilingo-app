import { Injectable } from '@angular/core';
import { partida } from './partida';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PartidaService {
  private urlEndPoint:string = 'http://localhost:8080/api/partida';

  constructor(private http: HttpClient) { }

  getPartidas(): Observable<partida[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as partida[])
    )
  }
}
