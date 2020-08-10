import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { environment } from '@environments/environment';

import { ResumeService } from './resume.service';
import { IEducation } from './models/education.interface';
import { IExperience } from './models/experience.interface';
import { ICertificate } from './models/certificate.interface';

@Component({
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnDestroy {
  private pageTitle = `${environment.pageTitle} - Resume`;

  // Education history
  educationSub: Subscription;
  educations: {isLoading: boolean, data: IEducation[]} = {
    isLoading: false,
    data: []
  };

  // Work Experience history
  experienceSub: Subscription;
  experiences: {isLoading: boolean, data: IExperience[]} = {
    isLoading: false,
    data: []
  };

  // Certificates
  certificateSub: Subscription;
  certificates: {isLoading: boolean, data: ICertificate[]} = {
    isLoading: false,
    data: []
  };

  constructor(private titleService: Title,
              private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.pageTitle);
    this.fetchEducation();
    this.fetchExperience();
    this.fetchCertificate();
  }

  private fetchEducation(): void {
    this.educations.isLoading = true;
    this.educationSub = this.resumeService.getEducations().subscribe(
      (educations: IEducation[]) => {
        this.educations.data = educations;
        this.educations.isLoading = false;
      }
    );
  }

  private fetchExperience(): void {
    this.experiences.isLoading = true;
    this.experienceSub = this.resumeService.getExperiences().subscribe(
      (experiences: IExperience[]) => {
        this.experiences.data = experiences;
        this.experiences.isLoading = false;
      }
    );
  }

  private fetchCertificate(): void {
    this.certificates.isLoading = true;
    this.certificateSub = this.resumeService.getCertificates().subscribe(
      (certificates: ICertificate[]) => {
        this.certificates.data = certificates;
        this.certificates.isLoading = false;
      }
    );
  }

  openExternalLink(link: string): void {
    window.open(link);
  }

  ngOnDestroy(): void {
    this.educationSub.unsubscribe();
    this.experienceSub.unsubscribe();
    this.certificateSub.unsubscribe();
  }
}
