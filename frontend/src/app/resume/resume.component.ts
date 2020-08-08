import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';

@Component({
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  private pageTitle = `${environment.pageTitle} - Resume`;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.pageTitle);
  }
}
