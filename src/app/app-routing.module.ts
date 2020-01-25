import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { KursComponent } from './kurs/kurs.component';


const routes: Routes = [
  {path: 'add-new-course', component: AddNewCourseComponent},
  {path: 'courses', component: KursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddNewCourseComponent, KursComponent];
