import { Injectable } from '@angular/core';
import { pregunta } from './pregunta';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
//import * as EventSource from 'eventsource';
import { of } from 'rxjs';
import { EventSourcePolyfill } from 'ng-event-source';



@Injectable({
 providedIn: 'root'
})
export class PreguntaService {
  private eventSource: EventSourcePolyfill;
  preguntas: pregunta[] = [];
  private urlEndPoint:string = 'http://localhost:8080/api/pregunta';

  constructor(private http: HttpClient){ 
    
  }


 getPreguntas(): Observable<pregunta[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as pregunta[])
    )
  

/*
  getPregunta2(): Observable<Array<pregunta>> {

    this.preguntas = [];
    return Observable.create((observer) => {
      let urlEndPoint = this.urlEndPoint;

      let eventSource = new EventSource(urlEndPoint);
      eventSource.onmessage = (event) => {
        console.debug('Received event: ', event);
        let json = JSON.parse(event.data);
        this.preguntas.push(new pregunta(json['id'], json['tema'], json['pregunta'], json['respuestas'], json['correcta'] ));
        observer.next(this.preguntas);
        

      };

      eventSource.onerror = (error) => {
        // readyState === 0 (closed) means the remote source closed the connection,
        // so we can safely treat it as a normal situation. Another way of detecting the end of the stream
        // is to insert a special element in the stream of events, which the client can identify as the last one.
        if(eventSource.readyState === 0) {
          console.log('papi algo anda mal ya que el evento sigue abierto');
          eventSource.close();
          observer.complete();
        } else {
          observer.error('EventSource error: ' + error);
        }
      }
    });

}*/
 }
}
