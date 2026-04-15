import { inject, Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { ConcertModel } from '../models/concert.model';


@Injectable({
  providedIn: 'root',
})
export class ConcertService {
  private dataStorage = inject(DataStorageService);

  concert: ConcertModel[] = []
  city: string[] = []
  gender: string[] = []

  getConcert() {
    this.dataStorage.inviaRichiesta("GET", "/concerti")?.subscribe({
      next: (concertArray: any) => {
        this.concert = concertArray;
        console.log(this.concert);
      },
      error: (err: any) => {
        console.log(err);
        alert(err.message);
      }
    })
  }

  getCity() {
    this.dataStorage.inviaRichiesta("GET", "/concerti")?.subscribe({
      next: (concertArray: any) => {
        for (const concert of concertArray) {
          if (!this.city.includes(concert.sede.citta)) {
            this.city.push(concert.sede.citta)
          }
        }
        console.log(this.concert);
      },
      error: (err: any) => {
        console.log(err);
        alert(err.message);
      }
    })
  }

  getGender() {
    this.dataStorage.inviaRichiesta("GET", "/concerti")?.subscribe({
      next: (concertArray: any) => {
        for (const concert of concertArray) {
          if (!this.gender.includes(concert.genere)) {
            this.gender.push(concert.genere)
          }
        }
        console.log(this.concert);
      },
      error: (err: any) => {
        console.log(err);
        alert(err.message);
      }
    })
  }

  filtra(city: string, gender: string) {
    const params = {} as any;

    if (city !== "all" && city !== "Città") {
      params['sede.citta'] = city;
    }
    if (gender !== "all" && gender !== "Generi") {
      params.genere = gender;
    }
    console.log(city)
    console.log(gender)
    console.log(params)

    this.dataStorage.inviaRichiesta("GET", "/concerti", params)?.subscribe({
      next: (concertArray: any) => {
        this.concert = concertArray;
        console.log(this.concert);
      },
      error: (err: any) => {
        console.log(err);
        alert(err.message);
      }
    });
  }

  prenota(concerto: any) {
    console.log(concerto)
    concerto.postiPrenotati = concerto.postiPrenotati + 1
    return this.dataStorage.inviaRichiesta("PATCH", "/concerti/" + concerto.id, concerto)
  }
}
