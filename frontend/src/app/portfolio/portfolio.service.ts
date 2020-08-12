import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IProject } from './models/project.interface';
import { ITestimonial } from './models/testimonial.interface';

@Injectable({providedIn: 'root'})
export class PortfolioService {

  private endpoint = environment.api.url + '/portfolio';
  projects: IProject[];

  constructor(private http: HttpClient) {}

  getProjects(): Observable<IProject[]> {
    // Returns an observable of projects.
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

  getNextProject(slug: string): Observable<IProject> {
    // Returns an observable of next project for the current project slug.
    return this.getProjects().pipe(
      map((projects: IProject[]) => {
        const currentIndex = projects.findIndex(project => project.slug == slug);
        const nextIndex = currentIndex + 1;
        return nextIndex >= projects.length ? projects[0] : projects[nextIndex];
      })
    );
  }

  getPreviousProject(slug: string): Observable<IProject> {
    // Returns an observable of the previous project for the current project slug.
    return this.getProjects().pipe(
      map((projects: IProject[]) => {
        const currentIndex = projects.findIndex(project => project.slug == slug);
        const prevIndex = currentIndex - 1;
        return prevIndex < 0 ? projects[projects.length - 1] : projects[prevIndex];
      })
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
