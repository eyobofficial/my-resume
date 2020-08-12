import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { environment } from '@environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { IProject } from '../models/project.interface';
import { PortfolioService } from '@portfolio/portfolio.service';

@Component({
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {

  project: IProject;
  nextSub: Subscription;
  prevSub: Subscription;
  carouselOptions: OwlOptions;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private portfolioService: PortfolioService,
              private titleService: Title) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.project = data['project'];
        this.initCarousel();
        this.initTitle(this.project.name);
      }
    );
  }

  onNext(): void {
    const slug = this.project.slug;
    this.nextSub = this.portfolioService.getNextProject(slug).subscribe(
      (nextProject: IProject) => this.router.navigate(['/portfolio', nextProject.slug])
    );
  }

  onPrevious(): void {
    const slug = this.project.slug;
    this.prevSub = this.portfolioService.getPreviousProject(slug).subscribe(
      (prevProject: IProject) => this.router.navigate(['/portfolio', prevProject.slug])
    );
  }

  onClose(): void {
    this.router.navigate(['/portfolio']);
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

  ngOnDestroy(): void {
    this.nextSub?.unsubscribe();
    this.prevSub?.unsubscribe();
  }
}
