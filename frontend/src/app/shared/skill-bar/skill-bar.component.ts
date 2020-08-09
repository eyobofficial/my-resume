import { Component, Input } from '@angular/core';
import { ISkill } from '@resume/models/skill.interface';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.css']
})
export class SkillBarComponent {

  @Input('skill') skill: ISkill;
}
