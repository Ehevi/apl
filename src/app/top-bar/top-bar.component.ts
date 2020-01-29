import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../services/user.service';
import { User } from '../types/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

    private authUser;
    private role;
    public noAccount: boolean;
    public auth = AuthService;
    constructor(private fireAuth: AngularFireAuth, private usersService: UserService, private router: Router) {
      this.noAccount = true;
    }

    ngOnInit() {
    this.fireAuth.auth.onAuthStateChanged( authUser => {
      this.authUser = authUser;
      if (authUser) {this.usersService.getUser(authUser.email).subscribe( (dbUser: User) => {
        this.role = dbUser.role;
        this.noAccount = false;
      }); } else {this.noAccount = true; }
    });
  }

  logOut() {
    this.fireAuth.auth.signOut();
    this.authUser = null;
    this.role = null;
    this.noAccount = true;
    this.router.navigate(['/']);
    window.location.reload();
  }

}
