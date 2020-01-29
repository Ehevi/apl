import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { CourseListComponent } from './courseList/courseList.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './guards/auth.guard';
import { SecureInnerPagesGuard } from './guards/secure-inner-pages.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path: 'add-new-course', component: AddNewCourseComponent, canActivate: [AdminGuard]},
  {path: '', component: HomePageComponent},
  {path: 'rejestracja', component: RejestracjaComponent, canActivate: [SecureInnerPagesGuard]},
  {path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AddNewCourseComponent, CourseListComponent,
  RejestracjaComponent, LoginComponent];
