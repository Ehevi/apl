import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { CourseListComponent } from './courseList/courseList.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentPanelComponent } from './student-panel/student-panel.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';


const routes: Routes = [
  {path: 'add-new-course', component: AddNewCourseComponent},
  {path: '', component: HomePageComponent},
  {path: 'student-panel', component: StudentPanelComponent},
  {path: 'rejestracja', component: RejestracjaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddNewCourseComponent, CourseListComponent, StudentPanelComponent, RejestracjaComponent];
