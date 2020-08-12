import { Component, Input } from '@angular/core';

import { IProject } from '@portfolio/models/project.interface';

@Component({
  selector: 'app-project-thumbnail',
  templateUrl: './project-thumbnail.component.html',
  styleUrls: ['./project-thumbnail.component.css']
})
export class ProjectThumbnailComponent {
  @Input() project: IProject;
}
