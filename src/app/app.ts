import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./toolbar-component/toolbar-component";
import { ConcertsComponent } from "./concerts-component/concerts-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, ConcertsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SIMULAZIONE');
}
