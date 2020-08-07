import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';
import { Subscription } from 'rxjs';

import { PortfolioService } from '../portfolio.service';
import { IPortfolio } from '../portfolio.interface';

@Component({
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit, OnDestroy {

  portfolios: IPortfolio[] = [];
  serviceSubscription: Subscription;
  private pageTitle = `${environment.pageTitle} - Portfolio`;


  constructor(private portfolioService: PortfolioService,
              private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.pageTitle);
    this.serviceSubscription = this.portfolioService.getPortfolios().subscribe(
      (portfolios: IPortfolio[]) => this.portfolios = portfolios
    );
  }

  ngOnDestroy(): void {
    this.serviceSubscription.unsubscribe();
  }

}
