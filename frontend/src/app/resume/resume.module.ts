import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumeComponent } from './resume.component';

const routes: Routes = [
  {path: '', component: ResumeComponent}
]

@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class ResumeModule {}
