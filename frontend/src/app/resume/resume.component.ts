import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { environment } from '@environments/environment';

import { ResumeService } from './resume.service';
import { ISkill } from './models/skill.interface';
import { IEducation } from './models/education.interface';
import { IExperience } from './models/experience.interface';
import { ICertificate } from './models/certificate.interface';

@Component({
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  private pageTitle = `${environment.pageTitle} - Resume`;
  educations: Observable<IEducation[]>;
  experiences: Observable<IExperience[]>;
  certificates: Observable<ICertificate[]>;

  // Skills
  frontendSkills: Observable<ISkill[]>;
  backendSkills: Observable<ISkill[]>;
  devopsSkills: Observable<ISkill[]>;

  constructor(private titleService: Title,
              private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.pageTitle);
    this.educations = this.resumeService.getEducations();
    this.experiences = this.resumeService.getExperiences();
    this.certificates = this.resumeService.getCertificates();
    this.frontendSkills = this.resumeService.getFrontendSkills();
    this.backendSkills = this.resumeService.getBackendSkills();
    this.devopsSkills = this.resumeService.getDevopsSkills();
  }

  openExternalLink(link: string): void {
    window.open(link);
  }
}
