import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IPortfolio } from './models/portfolio.interface';
import { ITestimonial } from './models/testimonial.interface';

@Injectable({providedIn: 'root'})
export class PortfolioService {

  private endpoint = environment.api.url + '/portfolio';

  constructor(private http: HttpClient) {}

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

  getTestimonials(): Observable<ITestimonial[]> {
    // Return all published testimonials
    const url = `${this.endpoint}/testimonials/`;
    return this.http.get<ITestimonial[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    // Returns error observable
    return throwError(error);
  }
}
