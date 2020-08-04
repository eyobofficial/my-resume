import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';

const routes: Routes = [
  {path: '', component: BlogComponent}
]

@NgModule({
  declarations: [BlogComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class BlogModule {}
