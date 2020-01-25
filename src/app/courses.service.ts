import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Course } from 'src/app/Courses';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private newCourseSource = new Subject<Course>();
  newCourse$ = this.newCourseSource.asObservable();

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('../assets/mockData.json');
  }

  getCourse() {
  }

  addCourse(addedCourse: Course) {
    this.newCourseSource.next(addedCourse);
  }
}
