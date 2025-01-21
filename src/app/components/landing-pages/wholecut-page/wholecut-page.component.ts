import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'wholecut-page',
  templateUrl: './wholecut-page.component.html',
  styleUrl: './wholecut-page.component.scss'
})
export class WholecutPageComponent {
  @ViewChild('section8') section8!: ElementRef;

  scrollToCTA() {
    this.section8.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  goToOffer(){
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeEzB8N_u7NwD2mqHx5sMK6khkASK8jhzbtXtjXffKfc' +
      'IOU_g/viewform?usp=sf_link';
  }
}
