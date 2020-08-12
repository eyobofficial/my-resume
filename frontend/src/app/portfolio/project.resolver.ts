import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,
         RouterStateSnapshot,
         Resolve } from '@angular/router';

import { IProject } from './models/project.interface';
import { PortfolioService } from './portfolio.service';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProjectResolver implements Resolve<IProject> {

  constructor(private portfolioService: PortfolioService) {}

  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<IProject> {
    const slug = route.paramMap.get('slug');
    return this.portfolioService.getProject(slug);
  }
}
