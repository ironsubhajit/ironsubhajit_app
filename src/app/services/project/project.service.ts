import { Injectable } from '@angular/core';
import { mockProjectList } from 'src/app/config/mock.projects';
import { Project } from 'src/app/interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  // service method to fetch project list from api
  getProjects(): Project[] {
    return mockProjectList;
  }
}
