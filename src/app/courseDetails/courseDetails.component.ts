import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../types/course';

@Component({
  selector: 'app-lista',
  templateUrl: './courseDetails.component.html',
  styleUrls: []
})
export class CourseDetailsComponent implements OnInit {

  @Input() public course: Course;

  courseRated: boolean;
  rating: number;
  constructor() { }

  ngOnInit() {
    this.courseRated = false;
  }

  onRate(rating) {
    if (rating.value !== 0) {
      this.rating = rating.value;
      this.courseRated = true;
    }
  }
}
