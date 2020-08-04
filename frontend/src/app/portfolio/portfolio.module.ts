import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
  {path: '', component: PortfolioComponent}
]

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PortfolioModule {}
