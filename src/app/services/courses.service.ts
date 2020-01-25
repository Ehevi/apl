import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Course } from '../types/course';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesSource = new BehaviorSubject<Course[]>([]);
  private nextFreeId = 0;

  constructor(private http: HttpClient) {
    this.http.get<Course[]>('../assets/mockData.json').subscribe(value => {
      this.coursesSource.next(value);
      this.nextFreeId = value.reduce((max, curr) => curr.id > max ? curr.id : max, 0);
    });
  }

  getCourses(): Observable<Course[]> {
    return this.coursesSource;
  }

  getCourse(id: number): Course|null {
    console.dir(this.coursesSource.value);
    return this.coursesSource.value.find(course => course.id == id) || null;
  }

  addCourse(addedCourse: Course) {
    addedCourse.id = this.nextFreeId++;
    this.coursesSource.next([ addedCourse, ...this.coursesSource.value ]);
  }

  deleteCourse(id: number): void {
    this.coursesSource.next(this.coursesSource.value.filter(course => course.id != id));
  }

  editCourse(editedCourse: Course): void {
    this.coursesSource.next(this.coursesSource.value.map(course => {
      if (course.id != editedCourse.id) {
        return course;
      }

      return editedCourse;
    }));
  }
}
