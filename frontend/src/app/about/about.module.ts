import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { AboutComponent } from './about.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
  {path: '', component: AboutComponent}
]

@NgModule({
  declarations: [
    AboutComponent,
    TestimonialComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CarouselModule,
    CommonModule
  ]
})
export class AboutModule {}
