import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
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

  // Frontend Skills
  frontendSkillSub: Subscription;
  frontendSkills: {isLoading: boolean, data: ISkill[]} = {
    isLoading: false,
    data: []
  };

  // Backend Skills
  backendSkillSub: Subscription;
  backendSkills: {isLoading: boolean, data: ISkill[]} = {
    isLoading: false,
    data: []
  };

  // DevOps Skills
  devopsSkillSub: Subscription;
  devopsSkills: {isLoading: boolean, data: ISkill[]} = {
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
    this.fetchFrontendSkills();
    this.fetchBackendSkills();
    this.fetchDevopsSkills();
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

  private fetchFrontendSkills(): void {
    this.frontendSkills.isLoading = true;
    this.frontendSkillSub = this.resumeService.getFrontendSkills().subscribe(
      (skills: ISkill[]) => {
        this.frontendSkills.data = skills;
        this.frontendSkills.isLoading = false;
      }
    );
  }

  private fetchBackendSkills(): void {
    this.backendSkills.isLoading = true;
    this.backendSkillSub = this.resumeService.getBackendSkills().subscribe(
      (skills: ISkill[]) => {
        this.backendSkills.data = skills;
        this.backendSkills.isLoading = false;
      }
    );
  }

  private fetchDevopsSkills(): void {
    this.devopsSkills.isLoading = true;
    this.devopsSkillSub = this.resumeService.getDevopsSkills().subscribe(
      (skills: ISkill[]) => {
        this.devopsSkills.data = skills;
        this.devopsSkills.isLoading = false;
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
    this.frontendSkillSub.unsubscribe();
    this.backendSkillSub.unsubscribe();
    this.devopsSkillSub.unsubscribe();
  }
}
