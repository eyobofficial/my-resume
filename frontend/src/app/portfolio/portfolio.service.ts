import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IPortfolio } from './portfolio.interface';

@Injectable({providedIn: 'root'})
export class PortfolioService {

  // Portfolios
  portfolios: IPortfolio[] = [
    {id: 1, title: 'Woreket Payment Tracker'},
    {id: 2, title: 'Rekik Engineering'},
    {id: 3, title: 'Coworking Spaces'}
  ];

  getPortfolios(): Observable<IPortfolio[]> {
    // Returns all portfolios.
    return Observable.create(observer => {
      observer.next(this.portfolios.slice());
    });
  }

  getPortfolio(id: number): Observable<IPortfolio> {
    // Return a single portfolio by it's id.
    const portfolio = this.portfolios.find(portfolio => portfolio.id == id);
    return of(portfolio);
  }
}
