import { Component, OnInit } from '@angular/core';
import { PartidaService } from './partida.service';
import { partida } from './partida';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {

  partidas: partida[];
  constructor(private partidaService: PartidaService) {

    this.partidaService = partidaService;

   }

  ngOnInit(): void {

    this.partidaService.getPartidas().subscribe(
      partidas => this.partidas = partidas //funcion anonima para simplificar
      );
  }

}
