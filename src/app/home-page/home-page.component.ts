import { Component, OnInit } from '@angular/core';
import { Permissions } from '../types/permissions';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private editingId = -1;
  private permissions: Permissions = Permissions.LOGGED_OUT;

  constructor(private authService: AuthService) {
    this.authService.getPermissions().subscribe(perm => this.permissions = perm);
  }

  ngOnInit() {
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

  isAdmin(): boolean {
    return this.permissions === Permissions.ADMIN;
  }
}
