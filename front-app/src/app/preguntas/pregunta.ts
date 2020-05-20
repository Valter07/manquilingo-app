export class pregunta  {
    id: string;
    tema: string;
    pregunta: string;
    respuestas: Array<string>;
    correcta: string;

    constructor( id: string, tema: string, pregunta: string, respuestas: Array<string>, correcta: string) {
        this.id = id;
        this.tema = tema;
        this.pregunta = pregunta;
        this.respuestas = respuestas;
        this.correcta = correcta;
      }

}



  