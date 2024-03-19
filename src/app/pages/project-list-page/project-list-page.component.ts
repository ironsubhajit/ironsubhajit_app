import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'ironsubhajit-project-list-page',
  templateUrl: './project-list-page.component.html',
  styleUrls: ['./project-list-page.component.scss'],
})
export class ProjectListPageComponent {
  projectList: Project[] = [];

  loading: boolean = false;

  // Number of skeletons
  num_of_skeletons: number = 4;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    // this.loading = true;
    // setTimeout(() => {
      this.getProjectList();
    //   this.loading = false;
    // }, 2000);
  }

  getProjectList(): void {
    this.projectList = this.projectService?.getProjects();
  }

  trackByFn(index: number, project: Project) {
    return index;
  }
}
