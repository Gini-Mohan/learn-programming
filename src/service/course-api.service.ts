import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Course } from 'src/app/model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseApiService {
  private apiBaseURL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getProperties():Observable<Course[]> {
    
    let errorMsg: string;
    return this.httpClient.get<Course[]>(`${this.apiBaseURL}/lessons`)
    .pipe(
      catchError(error => {
          if (error.error instanceof ErrorEvent) {
              errorMsg = `Error: ${error.error.message}`;
          } else {
              errorMsg = 'Error accessing the API';
          }
          return throwError(errorMsg);
      })
    )
  }
}
