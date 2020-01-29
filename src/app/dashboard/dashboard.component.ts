import { Component, OnInit } from '@angular/core';
import { User } from '../types/user';
import { UserService } from '../services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public authUser;
  public role;
  public printemail;
  public printname;

  constructor(private fireAuth: AngularFireAuth, private userService: UserService) { }

    ngOnInit() {
    this.fireAuth.auth.onAuthStateChanged( authUser => {
      this.authUser = authUser;
      if (authUser) {this.userService.getUser(authUser.email).subscribe( (dbUser: User) => {
        this.role = dbUser.role;
        this.printemail = dbUser.email;
        this.printname = dbUser.displayname;
      }); }
    });
  }

}
