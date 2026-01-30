import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'style-consultation-page',
  templateUrl: './style-consultation-page.component.html',
  styleUrl: './style-consultation-page.component.scss'
})
export class StyleConsultationPageComponent implements OnInit, OnDestroy {

  testimonials = [
    {
      text: 'Your guidance transformed my wardrobe and my confidence.',
      author: 'Donald'
    },
    {
      text: 'This isn’t about clothes — it’s about raising standards.',
      author: 'Igor'
    },
    {
      text: 'I carry myself differently now. People notice.',
      author: 'Chinmay'
    }
  ];

  activeIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  callToAction(): void {
    window.location.href = 'https://forms.gle/Yw74TTHxMmq5Mprn6';
  }

  scrollToApplication() {
    document
      .getElementById('cta')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
