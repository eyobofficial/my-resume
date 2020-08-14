import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';
import { Subscription } from 'rxjs';

import { PortfolioService } from '../portfolio.service';
import { IProject } from '../models/project.interface';

@Component({
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnDestroy {

  projects: IProject[] = [];
  isProjectsLoading = false;
  private projectSub: Subscription;
  private pageTitle = `${environment.pageTitle} - Portfolio`;


  constructor(private portfolioService: PortfolioService,
              private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.pageTitle);
    this.fetchProjects();
  }

  private fetchProjects(): void {
    this.isProjectsLoading = true;
    this.projectSub = this.portfolioService.getProjects().subscribe(
      (projects: IProject[]) => {
        this.projects = projects;
        this.isProjectsLoading = false;
      }
    )
  }

  ngOnDestroy(): void {
    this.projectSub.unsubscribe();
  }
}
