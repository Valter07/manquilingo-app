import { respuesta } from './respuesta';

export class pregunta  {
    id: string;
    tema: string;
    pregunta: string;
    respuestas: Array<respuesta>;

    constructor( id: string, tema: string, pregunta: string, respuestas: Array<respuesta>) {
        this.id = id;
        this.tema = tema;
        this.pregunta = pregunta;
        this.respuestas = respuestas;
      }

}



  