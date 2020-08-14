import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {path: '', component: BlogComponent}
]

@NgModule({
  declarations: [BlogComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: []
})
export class BlogModule {}
