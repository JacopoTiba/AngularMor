import { Component, inject } from '@angular/core';
import { ConcertService } from '../shared/concert.service';

@Component({
  selector: 'app-toolbar-component',
  imports: [],
  templateUrl: './toolbar-component.html',
  styleUrl: './toolbar-component.css',
})
export class ToolbarComponent {
  public concertService = inject(ConcertService)

  city: string = "Città"
  gender: string = "Generi"

  ngOnInit() {
    this.concertService.getCity()
    this.concertService.getGender()
  }

  filtra() {
    this.concertService.filtra(this.city, this.gender)
  }
}