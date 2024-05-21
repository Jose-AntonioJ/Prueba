import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ListadoPeliculasComponent } from '../../peliculas/listado-peliculas/listado-peliculas.component';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component';
import { MaterialModule } from '../../material/material.module';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-listado-generico',
  standalone: true,
  imports: [AppComponent, ListadoPeliculasComponent, DatePipe, NgFor, NgIf, MenuComponent, MaterialModule,RatingComponent],
  templateUrl: './listado-generico.component.html',
  styleUrl: './listado-generico.component.css'
})
export class ListadoGenericoComponent implements OnInit{

  @Input()
  listado;
  constructor() {}
  ngOnInit(): void {
    
  }

}
