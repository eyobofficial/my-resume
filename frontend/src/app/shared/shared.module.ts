import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './skills/skills.component';
import { SkillBarComponent } from './skills/skill-bar/skill-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    SkillsComponent,
    SkillBarComponent,
    SpinnerComponent,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SkillsComponent,
    SkillBarComponent,
    SpinnerComponent,
    SafePipe
  ]
})
export class SharedModule {}
