import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ChoicePopupComponent} from "./choice-popup/choice-popup.component";

@Component({
  selector: 'app-lead-magnet-page',
  templateUrl: './lead-magnet-page.component.html',
  styleUrl: './lead-magnet-page.component.scss'
})
export class LeadMagnetPageComponent {

  constructor(
    private dialog: MatDialog){
    }

  openPopup() {
    this.dialog.open(ChoicePopupComponent, {
      width: '80vw',
      maxHeight: '80vh'
    });
  }
}
