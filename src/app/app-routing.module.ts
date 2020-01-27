import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { CourseListComponent } from './courseList/courseList.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';
import { NoAccountComponent } from './no-account/no-account.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'add-new-course', component: AddNewCourseComponent},
  {path: '', component: HomePageComponent},
  {path: 'rejestracja', component: RejestracjaComponent},
  {path: 'no-account', component: NoAccountComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AddNewCourseComponent, CourseListComponent,
  RejestracjaComponent, NoAccountComponent, LoginComponent];
