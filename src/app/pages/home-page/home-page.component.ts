import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'ironsubhajit-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  projectList: Project[] = [];

  imagePath: string = '/assets/vector_images/welcome_banner.png'

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjectList();
  }

  getProjectList(): void {
    this.projectList = this.projectService?.getProjects();
  }
  
  trackByFn(index: number, project: Project) {
    return index
  }
}
