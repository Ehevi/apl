import { Component, OnInit } from '@angular/core';
import { Permissions } from '../types/permissions';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  private permissions: Permissions = Permissions.LOGGED_OUT;

  constructor(private authService: AuthService) {
    this.authService.getPermissions().subscribe(perm => this.permissions = perm);
  }

  ngOnInit() {
  }

  isStudent(): boolean {
    return this.permissions === Permissions.STUDENT;
  }

  isAdmin(): boolean {
    return this.permissions === Permissions.ADMIN;
  }

  noAccount(): boolean {
    return this.permissions === Permissions.LOGGED_OUT;
  }

}
