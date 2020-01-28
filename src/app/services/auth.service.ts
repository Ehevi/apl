import { Injectable } from '@angular/core';
import { Permissions } from '../types/permissions';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private permissions: BehaviorSubject<Permissions>;

  constructor() {
    this.permissions = new BehaviorSubject(Permissions.STUDENT);
  }

  getPermissions(): Observable<Permissions> {
    return this.permissions;
  }

}
