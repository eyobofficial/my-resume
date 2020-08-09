import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillBarComponent } from './skill-bar/skill-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    SkillBarComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SkillBarComponent,
    SpinnerComponent
  ]
})
export class SharedModule {}
