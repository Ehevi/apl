import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Courses } from 'src/app/Courses';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private newCourseSource = new Subject<Courses>();
  newCourse$ = this.newCourseSource.asObservable();

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>('../assets/mockData.json');
  }

  getCourse() {
  }

  addCourse(addedCourse: Courses) {
    this.newCourseSource.next(addedCourse);
  }
}
