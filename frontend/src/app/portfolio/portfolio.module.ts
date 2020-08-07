import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SharedModule } from '../shared/shared.module';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioThumbnailComponent } from './portfolio-list/portfolio-thumbnail/portfolio-thumbnail.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioResolver } from './portfolio.resolver';

const routes: Routes = [
  {path: '', component: PortfolioComponent, children: [
    {path: '', component: PortfolioListComponent},
    {
      path: ':id',
      component: PortfolioDetailComponent,
      resolve: {portfolio: PortfolioResolver}
    }
  ]}
]

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioListComponent,
    PortfolioThumbnailComponent,
    PortfolioDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CarouselModule,
    SharedModule
  ]
})
export class PortfolioModule {}
