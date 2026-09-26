import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly subjects = ['Sicher im Alltag', 'Deutsch im Beruf', 'Prüfungsvorbereitung'];
  readonly subjectDetails = [
    'Sprechen, verstehen und ankommen in deinem neuen Umfeld.',
    'Meetings, E-Mails und Gespräche professionell meistern.',
    'Gezielte Vorbereitung auf telc-, Goethe- und ÖSD-Prüfungen.'
  ];
}