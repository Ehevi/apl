import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoursesService } from '../courses.service';
import { Courses } from 'src/app/Courses';

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
      name: new FormControl('', Validators.required),
      desc: new FormControl(),
      ects: new FormControl('', [Validators.required]),
      semester: new FormControl(),
      classType: new FormControl(),
      maxStudents: new FormControl(),
      teacher: new FormControl()
    });
  }

  onSubmit() {
    const controls = this.myForm.controls;
    if (controls.name.invalid || controls.ects.invalid || this.myForm.value.type == null) {return; }
    const inputObject = this.myForm.value;
    const newCourse: Courses = {
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
