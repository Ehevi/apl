import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../types/course';
import { Permissions } from '../types/permissions';
import { AuthService } from '../services/auth.service';
import { PermsService } from '../services/perms.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './courseList.component.html',
  styleUrls: ['./courseList.component.scss']
})
export class CourseListComponent implements OnInit {

  private permissions: Permissions = Permissions.LOGGED_OUT;
  coursesArray: Course[];
  filterBy = 'type';
  classType = 'all';
  openedCourseId = -1;

  @Output() editCourse = new EventEmitter<number>();

  constructor(private coursesService: CoursesService, private permsservice: PermsService) {
    this.permsservice.getPermissions().subscribe(perm => this.permissions = perm);
  }

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

  isStudent(): boolean {
    return this.permissions === Permissions.STUDENT;
  }

  isAdmin(): boolean {
    return this.permissions === Permissions.ADMIN;
  }
}
