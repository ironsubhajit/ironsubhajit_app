import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { mockProjectList } from 'src/app/config/mock.projects';
import { Project } from 'src/app/interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  REST_API = 'http://localhost:3000';

  // HTTP HEADERS
  httpHeaders = new HttpHeaders().set('content-type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // ERROR HANDLE
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }

  // service method to fetch project list from api
  getProjects(): Observable<any> {
    const projectListApiUrl = `${this.REST_API}/project/list`;
    // console.warn(
    //   `httpHeaders of projects service: ${JSON.stringify(this.httpHeaders)}`
    // );

    return this.httpClient
      .get(`${projectListApiUrl}`, { headers: this.httpHeaders })
      .pipe(
        map((res: any) => {
          console.log("res ===> ", res)
          return res || {};
        }),
        catchError(this.handleError)
      );
  }

  // service method to fetch a project by id
  getProject(projectId: string): Project | null {
    return mockProjectList.find((project) => project._id === projectId) || null;
  }
}
