import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IProject } from './models/project.interface';
import { ITestimonial } from './models/testimonial.interface';

@Injectable({providedIn: 'root'})
export class PortfolioService {

  private endpoint = environment.api.url + '/portfolio';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<IProject[]> {
    // Returns an observable of past projects.
    const url = `${this.endpoint}/projects/`;
    return this.http.get<IProject[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getProject(slug: string): Observable<IProject> {
    // Returns an observable of a past project instance.
    const url = `${this.endpoint}/projects/${slug}/`;
    return this.http.get<IProject>(url).pipe(
      catchError(this.handleError)
    );
  }

  getTestimonials(): Observable<ITestimonial[]> {
    // Return an observable of all published testimonials
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
