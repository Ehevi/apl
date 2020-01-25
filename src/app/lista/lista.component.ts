import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../Courses';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['../rejestracja/rejestracja.component.css']
})
export class ListaComponent implements OnInit {

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
