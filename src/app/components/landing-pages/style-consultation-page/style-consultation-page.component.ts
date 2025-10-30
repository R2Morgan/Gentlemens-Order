import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'style-consultation-page',
  templateUrl: './style-consultation-page.component.html',
  styleUrl: './style-consultation-page.component.scss'
})
export class StyleConsultationPageComponent {
  constructor() {
    window.location.href='https://calendar.app.google/Z697T32S2h7p7cKm7';
  }
}
