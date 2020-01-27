import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  courseRated: boolean;
  rating: number;
  stars = [ 0, 0, 0, 0, 0, 0, 0 ];

  constructor() { }

  ngOnInit() {
    this.courseRated = false;
  }

  onStarHover(index: number) {
    if (!this.courseRated) {
      this.rating = index;
    }
  }

  onMouseLeave() {
    if (!this.courseRated) {
      this.rating = -1;
    }
  }

  onRated() {
    this.courseRated = true;
  }

}
