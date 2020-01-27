import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../types/course';
import { StarsComponent } from '../stars/stars.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './courseList.component.html',
  styleUrls: ['./courseList.component.scss']
})
export class CourseListComponent implements OnInit {

  coursesArray: Course[];
  filterBy = 'type';
  classType = 'all';
  openedCourseId = -1;
  stars: StarsComponent;

  @Output() editCourse = new EventEmitter<number>();

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe(data => {
      this.coursesArray = data;
    });
  }

  onCourseOpened(id: number) {
    if (this.openedCourseId === id) {
      this.openedCourseId = -1;
    } else {
      this.openedCourseId = id;
    }
  }

  onCourseEdited(id: number) {
    this.editCourse.emit(id);
  }

  onCourseDeleted(id: number) {
    this.coursesService.deleteCourse(id);
  }

}
