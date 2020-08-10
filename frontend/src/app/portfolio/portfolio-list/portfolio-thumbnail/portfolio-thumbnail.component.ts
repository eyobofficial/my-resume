import { Component, Input } from '@angular/core';

import { IPortfolio } from '@portfolio/models/portfolio.interface';

@Component({
  selector: 'app-portfolio-thumbnail',
  templateUrl: './portfolio-thumbnail.component.html',
  styleUrls: ['./portfolio-thumbnail.component.css']
})
export class PortfolioThumbnailComponent {
  @Input() portfolio: IPortfolio;
}
