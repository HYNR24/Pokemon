import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import {Data} from './services/data';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

protected readonly title = signal('pokemon');
personajes: any[] = [];

constructor(private Service: Data) {
  this.imprimirpersonaje();
}

imprimirpersonaje() {
  this.Service.obtenerPersonajes().subscribe((resultado) => {

    this.personajes = resultado.results.map((p: any) => {

      const id = p.url.split('/').filter(Boolean).pop();

      return {
        name: p.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      };

    });

    console.log(this.personajes);
  });
}
}