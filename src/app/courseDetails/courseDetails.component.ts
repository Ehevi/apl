import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../types/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './courseDetails.component.html',
  styleUrls: ['./courseDetails.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  @Input() public course: Course;

  constructor() { }

  ngOnInit() {
  }
}
