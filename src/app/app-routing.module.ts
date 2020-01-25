import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { CourseListComponent } from './courseList/courseList.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: 'add-new-course', component: AddNewCourseComponent},
  {path: '', component: HomePageComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddNewCourseComponent, CourseListComponent, SearchComponent];
