import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'ironsubhajit-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  projectId: string = '';
  project: Project | null = null;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id') || '';
    this.getProjectById(this.projectId);
  }

  // fetch project by id
  getProjectById(id: string): void {
    this.project = this.projectService?.getProject(id);
  }

  formatModifiedDateText(modifiedDate: string): string {
    // Convert the modifiedDate string to a Date object
    const modifiedDateTime: any = new Date(modifiedDate);

    // Current date
    const currentDate: any = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = currentDate - modifiedDateTime;

    // Calculate the difference in days
    const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysPassed <= 6) {
      return `Modified on: ${daysPassed} days ago`;
    } else {
      // Display the modified date in a desired format
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedModifiedDate = modifiedDateTime.toLocaleDateString(
        'en-IN',
        options
      );
      return `Modified on: ${formattedModifiedDate}`;
    }
  }
}
