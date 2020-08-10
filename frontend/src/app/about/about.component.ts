import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { environment } from '@environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { ITestimonial } from '@portfolio/models/testimonial.interface';
import { PortfolioService } from '@portfolio/portfolio.service';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  pageTitle = `${environment.pageTitle} - About Me`;
  testimonialsCarouselOptions: OwlOptions;
  testimonials: ITestimonial[] = [];
  isFetchingTestimonial = false;
  private testimonialSub: Subscription;

  constructor(private titleService: Title,
              private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.pageTitle);
    this.initTestimonialCarousel();
    this.fetchTestimonials();
  }

  private fetchTestimonials(): void {
    this.isFetchingTestimonial = true;
    this.testimonialSub = this.portfolioService.getTestimonials().subscribe(
      (testimonials: ITestimonial[]) => {
        this.testimonials = testimonials;
        this.isFetchingTestimonial = false;
      }
    );
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

  ngOnDestroy(): void {
    this.testimonialSub.unsubscribe();
  }

}
