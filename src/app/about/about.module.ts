import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { AboutComponent } from './about.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  {path: '', component: AboutComponent}
]

@NgModule({
  declarations: [
    AboutComponent,
    TestimonialComponent,
    SubscriptionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule,
    CarouselModule,
    CommonModule
  ]
})
export class AboutModule {}
