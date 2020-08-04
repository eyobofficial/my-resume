import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackComponent } from './feedback.component';

const routes: Routes = [
  {path: '', component: FeedbackComponent}
]

@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class FeedbackModule {}
