import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './courseDetails/courseDetails.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CourseListComponent } from './courseList/courseList.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import { NoAccountComponent } from './no-account/no-account.component';
import { LoginComponent } from './login/login.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseDetailsComponent,
    TopBarComponent,
    RejestracjaComponent,
    AddNewCourseComponent,
    HomePageComponent,
    SearchComponent,
    NoAccountComponent,
    LoginComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
