import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  stars;
  courseRated: boolean;
  rating: number;
  constructor() { }

  ngOnInit() {
    this.courseRated = false;
    this.stars = document.querySelectorAll('#rating span');
    for (let i = 0; i < this.stars.length; i++) {
    this.stars[i].setAttribute('data-count', i);
    this.stars[i].addEventListener('mouseenter', this.enterStarListener.bind(this)); }
    document.querySelector('#rating').addEventListener('mouseleave', this.leaveStarListener.bind(this));
  }

  enterStarListener(e) {
  this.fillStarsUpToElement(e.target);
  }

  leaveStarListener() {
  this.fillStarsUpToElement(null);
  }

  fillStarsUpToElement = function(el) {
  for (var i = 0; i < this.stars.length; i++) {
    if (el == null || this.stars[i].getAttribute('data-count') > el.getAttribute('data-count')) {
      this.stars[i].classList.remove('hover');
    } else {
      this.stars[i].classList.add('hover');
    }
  }
};

}
