import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { IProject } from '../models/project.interface';

@Component({
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: IProject;
  carouselOptions: OwlOptions;

  constructor(private route: ActivatedRoute,
              private router: Router,
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
}
