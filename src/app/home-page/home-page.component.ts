import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private editingId = -1;

  constructor() { }

  ngOnInit() {
  }

  onCourseEditTriggered(id: number) {
    this.editingId = id;
  }

  onEditCancelled() {
    this.editingId = -1;
  }

  onEditSuccessful() {
    this.editingId = -1;
  }

}
