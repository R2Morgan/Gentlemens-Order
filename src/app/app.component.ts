import { Component } from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'The-Gentlemens-Order';

  constructor(private overlayContainer: OverlayContainer) {}

  ngAfterViewInit() {
    const overlay = this.overlayContainer.getContainerElement();
    if (overlay.parentElement !== document.body) {
      document.body.appendChild(overlay);
    }
  }
}
