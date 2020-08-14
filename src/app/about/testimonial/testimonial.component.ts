import { Component, Input } from '@angular/core';

import { ITestimonial } from '@portfolio/models/testimonial.interface';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {

  @Input() testimonial: ITestimonial;
}
