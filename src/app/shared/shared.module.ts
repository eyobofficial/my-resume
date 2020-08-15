import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillBarComponent } from './skill-bar/skill-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    SkillBarComponent,
    SpinnerComponent,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SkillBarComponent,
    SpinnerComponent,
    SafePipe
  ]
})
export class SharedModule {}
