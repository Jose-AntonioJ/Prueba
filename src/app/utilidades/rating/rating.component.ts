import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';
import { MaterialModule } from '../../material/material.module';
import { ListadoPeliculasComponent } from '../../peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from '../listado-generico/listado-generico.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MaterialModule, ListadoGenericoComponent, ListadoPeliculasComponent, MenuComponent, NgForOf,NgIf],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit{

  @Input()
  maximoRating = 5;
  @Input()
  ratingSeleccionado = 0;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  maximoRatingArr = [];
  votado = false;
  ratingAnterior;

  constructor() {   }

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index: number): void{
    this.ratingSeleccionado = index + 1;
  }

  manejarMouseLeave(){
    if(this.ratingAnterior !== 0){
      this.ratingSeleccionado = this.ratingAnterior;
    }else {
      this.ratingSeleccionado = 0;
    }
  }

  rate(index: number): void{
    this.ratingSeleccionado = index + 1;    
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }
}
