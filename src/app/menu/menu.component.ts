import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { AppComponent } from '../app.component';
import { ListadoGenericoComponent } from '../utilidades/listado-generico/listado-generico.component';
import { ListadoPeliculasComponent } from '../peliculas/listado-peliculas/listado-peliculas.component';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MaterialModule, AppComponent, ListadoGenericoComponent, ListadoPeliculasComponent, RatingComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  constructor() {}
  ngOnInit(): void {
    
  }
}
