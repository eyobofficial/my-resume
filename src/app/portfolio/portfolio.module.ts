import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SharedModule } from '../shared/shared.module';
import { PortfolioComponent } from './portfolio.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectThumbnailComponent } from './project-list/project-thumbnail/project-thumbnail.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectResolver } from './project.resolver';

const routes: Routes = [
  {path: '', component: PortfolioComponent, children: [
    {path: '', component: ProjectListComponent},
    {
      path: ':slug',
      component: ProjectDetailComponent,
      resolve: {project: ProjectResolver}
    }
  ]}
]

@NgModule({
  declarations: [
    PortfolioComponent,
    ProjectListComponent,
    ProjectThumbnailComponent,
    ProjectDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CarouselModule,
    SharedModule
  ]
})
export class PortfolioModule {}
