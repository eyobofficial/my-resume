import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { IPortfolio } from '../portfolio.interface';

@Component({
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {

  portfolio: IPortfolio;
  carouselOptions: OwlOptions;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private titleService: Title) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.portfolio = data['portfolio'];
        this.initCarousel();
        this.initTitle(this.portfolio.title);
      }
    );
  }

  onClose(): void {
    this.router.navigate(['/portfolios']);
  }

  private initTitle(title): void {
    const pageTitle = `${environment.pageTitle} - ${title}`;
    this.titleService.setTitle(pageTitle);
  }

  private initCarousel(): void {
    this.carouselOptions = {
      smartSpeed: 1200,
      items: 1,
      loop: true,
      center: true,
      dots: true,
      nav: true,
      navText: ['', ''],
      margin: 10,
      autoHeight: true,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 1
        }
      }
    }
  }
}
