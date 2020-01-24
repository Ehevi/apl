import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KursComponent } from './kurs/kurs.component';
import { ListaComponent } from './lista/lista.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { BanerComponent } from './baner/baner.component';

@NgModule({
  declarations: [
    AppComponent,
    KursComponent,
    ListaComponent,
    TopBarComponent,
    RejestracjaComponent,
    AddNewCourseComponent,
    BanerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
