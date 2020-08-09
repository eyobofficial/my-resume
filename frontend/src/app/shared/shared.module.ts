import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillBarComponent } from './skill-bar/skill-bar.component';

@NgModule({
  declarations: [
    SkillBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SkillBarComponent
  ]
})
export class SharedModule {}
