import { Injectable } from '@angular/core';
import { Permissions } from '../types/permissions';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermsService {

  public permissions: BehaviorSubject<Permissions>;
  constructor() {
    this.permissions = new BehaviorSubject(Permissions.LOGGED_OUT);
  }

  getPermissions(): Observable<Permissions> {
    return this.permissions;
  }

  updatePermission(perm: Permissions) {
    this.permissions = new BehaviorSubject(perm);
  }
}
