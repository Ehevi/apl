import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { CoursesService } from '../courses.service';
import { Course } from 'src/app/Courses';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.css']
})
export class AddNewCourseComponent implements OnInit {

  myForm: FormGroup;
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(),
      desc: new FormControl(),
      ects: new FormControl(),
      semester: new FormControl(),
      classType: new FormControl(),
      maxStudents: new FormControl(),
      teacher: new FormControl()
    });
  }

  onSubmit() {
    let controls = this.myForm.controls;
    console.dir(this.myForm);
    if (controls.name.invalid || controls.ects.invalid || this.myForm.value.classType == null) {
      return;
    }
    let inputObject = this.myForm.value;
    let newCourse: Course = {
      name: inputObject.name,
      desc: inputObject.desc,
      iconUrl: '../../favicon.ico',
      ects: inputObject.ects,
      semester: inputObject.semester,
      classType: inputObject.classType,
      maxStudents: inputObject.maxStudents,
      rating: 0,
      teacher: inputObject.teacher
    };
    this.coursesService.addCourse(newCourse);
  }

  isInt(control: FormControl) {
    return false;
  }
}
