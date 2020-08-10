import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './skills/skills.component';
import { SkillBarComponent } from './skills/skill-bar/skill-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    SkillsComponent,
    SkillBarComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SkillsComponent,
    SkillBarComponent,
    SpinnerComponent
  ]
})
export class SharedModule {}
