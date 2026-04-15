import { Component, inject } from '@angular/core';
import { ConcertService } from '../shared/concert.service';
import { DetailsComponent } from "../details-component/details-component";

@Component({
  selector: 'app-concerts-component',
  imports: [DetailsComponent],
  templateUrl: './concerts-component.html',
  styleUrl: './concerts-component.css',
})
export class ConcertsComponent {
  public concertService = inject(ConcertService)

  ngOnInit() {
    this.concertService.getConcert()
  }

  selectedConcert: any;

  mostraDettagli(concerto: any) {
    this.selectedConcert = concerto;
  }

  prenota(concerto: any) {
    this.concertService.prenota(concerto)?.subscribe({
    next: () => {
      alert("Prenotazione effettuata");
      this.concertService.getConcert();
    },
    error: (err) => {
      alert("Errore nella prenotazione");
      console.log(err);
    }
  });
  }
}
