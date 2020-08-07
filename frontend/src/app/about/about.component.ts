import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  pageTitle = `${environment.pageTitle} - About Me`;
  testimonialsCarouselOptions: OwlOptions;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.pageTitle);
    this.initTestimonialCarousel();
  }

  private initTestimonialCarousel(): void {
    this.testimonialsCarouselOptions = {
      nav: false,
      items: 3,
      loop: false,
      navText: ['', ''],
      margin: 25,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        768: {
          items: 2
        },
        1200: {
          items: 2
        }
      }
    };
  }

}
