import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@shared/shared.module';
import { ResumeComponent } from './resume.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: '', component: ResumeComponent}
]

@NgModule({
  declarations: [
    ResumeComponent,
    SkillsComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: []
})
export class ResumeModule {}
