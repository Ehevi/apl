import { Component, OnInit } from '@angular/core';
import { Permissions } from '../types/permissions';
import { PermsService } from '../services/perms.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public permissions: Permissions = Permissions.LOGGED_OUT;
  public PermsService: PermsService;

  constructor(gotAuthService: PermsService) {
    this.PermsService = gotAuthService;
    this.PermsService.getPermissions().subscribe(perm => this.permissions = perm);
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
