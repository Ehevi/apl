import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../types/course';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../services/user.service';
import { User } from '../types/user';

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
  private authUser;
  private role;
  private noAccount: boolean;

  @Output() editCourse = new EventEmitter<number>();

  constructor(private coursesService: CoursesService, private fireAuth: AngularFireAuth, private usersService: UserService) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe(data => {
      this.coursesArray = data;
    });
    this.fireAuth.auth.onAuthStateChanged( authUser => {
      this.authUser = authUser;
      if (authUser) {this.usersService.getUser(authUser.email).subscribe( (dbUser: User) => {
        this.role = dbUser.role;
      }); } else {this.noAccount = true; }
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

  logOut() {
    this.fireAuth.auth.signOut();
    this.noAccount = true;
    this.role = undefined;
    this.authUser = null;
  }

}
