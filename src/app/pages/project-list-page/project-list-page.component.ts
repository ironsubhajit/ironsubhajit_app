import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'ironsubhajit-project-list-page',
  templateUrl: './project-list-page.component.html',
  styleUrls: ['./project-list-page.component.scss'],
})
export class ProjectListPageComponent implements OnInit{
  projectList!: any;

  loading: boolean = false;

  // Number of skeletons
  num_of_skeletons: number = 4;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjectList();
  }

  getProjectList(): void {
    // Method to fetch list of projects
    this.loading = true;
    this.projectService?.getProjects().subscribe({
      next: (res) => {
        this.projectList = res;
      },
      error: (err) => {
        console.error('Error occured: ', err);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  trackByFn(index: number, project: Project) {
    return index;
  }
}
