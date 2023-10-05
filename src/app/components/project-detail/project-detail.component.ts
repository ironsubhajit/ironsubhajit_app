import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'ironsubhajit-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  project_title: string = 'Demo Project title';
  @Input() project?: Project;
  constructor() {}
  ngOnInit(): void {}
}
