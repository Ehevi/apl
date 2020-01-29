import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../services/user.service';
import { User } from '../types/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private editingId = -1;
  private authUser = null;
  private role = null;

  constructor(private fireAuth: AngularFireAuth, private usersService: UserService) { }

  ngOnInit() {
    this.fireAuth.auth.onAuthStateChanged( authUser => {
      this.authUser = authUser;
      if (authUser) {this.usersService.getUser(authUser.email).subscribe( (dbUser: User) => {
        this.role = dbUser.role;
      }); }
    });
  }

  onCourseEditTriggered(id: number) {
    this.editingId = id;
  }

  onEditCancelled() {
    this.editingId = -1;
  }

  onEditSuccessful() {
    this.editingId = -1;
  }

}
