import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { Course } from '../types/course';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.scss']
})
export class AddNewCourseComponent implements OnInit {

  private editingId = -1;
  private courseName = '';

  @Input('editingId')
  set setEditingId(id: number) {
      if (id != this.editingId) {
        const course = this.coursesService.getCourse(id);
        if (course) {
          this.myForm.patchValue(course);
          this.courseName = course.name;
        }
      }

      this.editingId = id;
  }

  @Output() editCancelled = new EventEmitter<void>();
  @Output() editSuccessful = new EventEmitter<void>();

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
    if (controls.name.invalid || controls.ects.invalid || this.myForm.value.classType == null) {
      return;
    }
    let inputObject = this.myForm.value;
    let newCourse: Course = {
      id: this.editingId,
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

    if (this.editingId == -1) {
      this.coursesService.addCourse(newCourse);
    } else {
      this.coursesService.editCourse(newCourse);
      this.editSuccessful.emit();
    }
  }

  onEditCancelled() {
    this.editCancelled.emit();
  }

  get formHeader() {
    return this.editingId == -1 ? `DODAJ NOWY KURS` : `EDYTUJ KURS "${this.courseName}"`;
  }
}
