import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,
         RouterStateSnapshot,
         Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { PortfolioService } from './portfolio.service';
import { IPortfolio } from './models/portfolio.interface';

@Injectable({providedIn: 'root'})
export class PortfolioResolver implements Resolve<IPortfolio> {

  constructor(private portfolioService: PortfolioService) {}

  resolve(route: ActivatedRouteSnapshot,
          _: RouterStateSnapshot): Observable<IPortfolio> | IPortfolio {
    const id = +route.params['id']
    return this.portfolioService.getPortfolio(id);
  }
}
