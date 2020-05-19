import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { PartidaComponent } from './partida/partida.component';
import { JugadorComponent } from './jugador/jugador.component';


const routes: Routes = [
  {path: '', redirectTo: './manquilingo', pathMatch: 'full'},
  {path: 'preguntas', component: PreguntasComponent},
  {path: 'partida', component: PartidaComponent},
  {path: 'jugador', component: JugadorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PreguntasComponent,
    PartidaComponent,
    JugadorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
