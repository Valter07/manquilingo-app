import { Component, OnInit } from '@angular/core';
import { PreguntaService } from './pregunta.service';
import { pregunta } from './pregunta';
import { Observable } from 'rxjs';
import { HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  
  preguntas: pregunta[];
  //selectedPregunta: pregunta;
  
  constructor(private preguntaService: PreguntaService){

    this.preguntaService = preguntaService;
  }

  

  ngOnInit(): void {

    this.preguntaService.getPreguntas().subscribe(
      preguntas => this.preguntas = preguntas //funcion anonima para simplificar
      );  

      /*this.preguntaService.getPregunta2().subscribe(
        preguntas => this.preguntas = preguntas //funcion anonima para simplificar
        
        );  */
       
        //this.preguntas = this.preguntaService.getPreguntas();

        
    
    }

}
