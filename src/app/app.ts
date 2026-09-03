import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { People } from "./people/people";

@Component({
  imports: [RouterOutlet, People],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('peopleApp');
}
