import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Courses } from '../Courses';

@Component({
  selector: 'app-kurs',
  templateUrl: './kurs.component.html',
  styleUrls: ['./kurs.component.css']
})
export class KursComponent implements OnInit {

  coursesArray: Courses[];
  filterBy = 'type';
  classType = 'all';

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe(data => this.coursesArray = data);
    this.coursesService.newCourse$.subscribe(
      addedCourse => {
        this.coursesArray.push(addedCourse);
      }
    );
  }

  onDelete(event) {
    for (let i = 0; i < this.coursesArray.length; i++) {
      if (JSON.stringify(this.coursesArray[i]) === JSON.stringify(event)) {
        this.coursesArray.splice(i, 1);
        break;
      }
    }
  }

}
