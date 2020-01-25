import { Component, OnInit, Input } from '@angular/core';
import { Courses } from '../Courses';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['../kurs/kurs.component.css']
})
export class ListaComponent implements OnInit {

  @Input() public course: Courses;

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
