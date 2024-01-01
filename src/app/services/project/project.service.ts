import { Injectable } from '@angular/core';
import { mockProjectList } from 'src/app/config/mock.projects';
import { Project } from 'src/app/interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  // service method to fetch project list from api
  getProjects(): Project[] {
    return mockProjectList;
  }

  // service method to fetch a project by id
  getProject(projectId: string): Project | null {
    return mockProjectList.find((project) => project._id === projectId) || null;
  }
}
