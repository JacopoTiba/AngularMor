import { Component, Input } from '@angular/core';
import { ConcertModel } from '../models/concert.model';

@Component({
  selector: 'app-details-component',
  imports: [],
  templateUrl: './details-component.html',
  styleUrl: './details-component.css',
})
export class DetailsComponent {
  @Input() concerto!: ConcertModel;
}
