import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { ListadoGenericoComponent } from '../../utilidades/listado-generico/listado-generico.component';
import { MenuComponent } from '../../menu/menu.component';
import { MaterialModule } from '../../material/material.module';
import { RatingComponent } from '../../utilidades/rating/rating.component';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [AppComponent, DatePipe, NgForOf, NgIf, ListadoGenericoComponent, MenuComponent,MaterialModule,RatingComponent],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit{

  constructor () {}
  @Input()
  peliculas;

  ngOnInit(): void {

  }

  remover(indicePeliculas: number): void{
    this.peliculas.splice(indicePeliculas, 1);
  }
}
