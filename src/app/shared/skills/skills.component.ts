import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ISkill } from '@resume/models/skill.interface';
import { ResumeService } from '@resume/resume.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy {

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

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.fetchFrontendSkills();
    this.fetchBackendSkills();
    this.fetchDevopsSkills();
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

  ngOnDestroy(): void {
    this.frontendSkillSub.unsubscribe();
    this.backendSkillSub.unsubscribe();
    this.devopsSkillSub.unsubscribe();
  }
}
