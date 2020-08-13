import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ISkill } from './models/skill.interface';
import { SkillType } from './models/skill-type.constants';
import { IEducation } from './models/education.interface';
import { IExperience } from './models/experience.interface';
import { ICertificate } from './models/certificate.interface';

@Injectable({providedIn: 'root'})
export class ResumeService {

  private endpoint = environment.api.url + '/resume/';

  constructor(private http: HttpClient) {}

  getEducations(): Observable<IEducation[]> {
    // Returns published educational histories.
    const url = this.endpoint + 'educations/';
    return this.http.get<IEducation[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getExperiences(): Observable<IExperience[]> {
    // Returns published work experience history.
    const url = this.endpoint + 'experiences/';
    return this.http.get<IExperience[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getCertificates(): Observable<ICertificate[]> {
    // Returns all published certificates.
    const url = this.endpoint + 'certificates/';
    return this.http.get<ICertificate[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedSkills(): Observable<ISkill[]> {
    // Returns all published featured skills.
    const url = this.endpoint + 'skills/';
    return this.http.get<ISkill[]>(url).pipe(
      catchError(this.handleError),
      map(skills => skills.filter(skill => !!skill.featured))
    );
  }

  getFrontendSkills(): Observable<ISkill[]> {
    // Returns published frontend skills.
    const url = this.endpoint + 'skills/';
    return this.http.get<ISkill[]>(url).pipe(
      catchError(this.handleError),
      map(skills => skills.filter(skill => skill.type == SkillType.Frontend))
    );
  }

  getBackendSkills(): Observable<ISkill[]> {
    // Returns published backend skills.
    const url = this.endpoint + 'skills/';
    return this.http.get<ISkill[]>(url).pipe(
      catchError(this.handleError),
      map(skills => skills.filter(skill => skill.type == SkillType.Backend))
    );
  }

  getDevopsSkills(): Observable<ISkill[]> {
    // Returns published DevOps skills.
    const url = this.endpoint + 'skills/';
    return this.http.get<ISkill[]>(url).pipe(
      catchError(this.handleError),
      map(skills => skills.filter(skill => skill.type == SkillType.DevOps))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    // Handle HTTP Error
    return throwError(error);
  }
}
