import {DatePipe, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { setTimeout } from 'timers';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from "./utilidades/rating/rating.component";
import { MaterialModule } from './material/material.module';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DatePipe, NgForOf, NgIf, ListadoPeliculasComponent, ListadoGenericoComponent, MenuComponent, RatingComponent, MaterialModule]
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() =>{
      this.peliculasEnCines = [{
        titulo: 'Spider-man',
        fechaLanzamiento: new Date,
        precio: 1400.99,
        poster: 'https://play-lh.googleusercontent.com/xYxakoygCm0UPG5WhwNlit5HWEBdKoJi6o5wWmQL1XSRxiGxu_TtsoxQOdrKuYHGy6Y=w240-h480-rw'
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date(2026 - 10 -5),
        precio: 300.99,
        poster: 'https://play-lh.googleusercontent.com/ECIYR1ZonMdi5TRn8WZjpUeTMgdGCDUGq9QSv8-bkD8T-txovfMt5il7V25guIApTQWR=w240-h480-rw'
      }]
    }, 3000);
  }
  title = 'Al valor que yo quiera';

  peliculasEnCines;
  peliculasProximosEstrenos = [];

  duplicarNumero (valor : number): number{
    return valor * 2;
  }

  manejarRated(voto: number): void{
    alert(voto);
  }
}
