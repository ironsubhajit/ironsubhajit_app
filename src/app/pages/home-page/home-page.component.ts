import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'ironsubhajit-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  projectList: Project[] = [];

  screenWidth!: number;
  customHeight!: { [key: string]: string };

  imagePath: string = '/assets/icons/welcome_banner.png'

  constructor(private projectService: ProjectService, private cdr: ChangeDetectorRef) {
     // Initialize the screenWidth property with the initial window height
     this.screenWidth = window.innerWidth;
     this.customHeight = { height: '26.25rem' };
  }

  ngOnInit(): void {
    this.getProjectList();
    this.adjustWidth();
  }

  // Listen for window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Update the screenWidth property with the new window width
    this.screenWidth = event.target.innerHeight;
    // Call a method to adjust the height based on the screen size
    this.adjustWidth();
    this.cdr.detectChanges(); // Trigger change detection
  }

  // Method to adjust the height based on the screen size
  adjustWidth() {
    // console.log("width ==> ", this.screenWidth)
    if (this.screenWidth <= 767) {
      this.customHeight = { height: '25.5rem' };
    } else {
      // Set the height value for larger screens
      this.customHeight = { height: '26.25rem' };
    }
  }

  getProjectList(): void {
    this.projectList = this.projectService?.getProjects();
  }
  
  trackByFn(index: number, project: Project) {
    return index
  }

  showAlert(): void {
    alert("Coming Soon: This feature is under development. Stay tuned for updates!")
  }
}
