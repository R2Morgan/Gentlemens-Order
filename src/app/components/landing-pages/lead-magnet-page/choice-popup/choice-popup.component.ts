import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-choice-popup',
  templateUrl: './choice-popup.component.html',
  styleUrls: ['./choice-popup.component.scss']
})
export class ChoicePopupComponent {
  private mailerLiteUrl = 'https://assets.mailerlite.com/jsonp/1773242/forms/168261034581165424/subscribe';
  private stripeUrl = 'https://buy.stripe.com/5kQ9AS0SO6hT09DaPBb7y00';
  private emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  protected emailInput = '';
  protected nameInput = '';
  protected checkboxInput = false;

  constructor(private dialogRef: MatDialogRef<ChoicePopupComponent>,
              private http: HttpClient,
              private router: Router) {}

  redirectToStripe() {
    window.open(this.stripeUrl, '_blank');
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    this.http.post(this.mailerLiteUrl, formData).subscribe({
      next: () => {
        this.dialogRef.close();
        this.router.navigate(['/wholecuts'])
      },
      error: (err) => {
        console.error('MailerLite error:', err);
        alert('Subscription failed — please try again.');
      }
    });
  }

  canSubmitForm(): boolean {
    const email = this.emailInput.trim();
    const name = this.nameInput.trim();
    if (!this.emailPattern.test(email)) {
      return false;
    }
    if (name.length < 2 || name.length > 20) {
      return false;
    }
    return this.checkboxInput;
  }
}
