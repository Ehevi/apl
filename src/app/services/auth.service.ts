import { Injectable, NgZone } from '@angular/core';
import { Permissions } from '../types/permissions';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../types/user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private permissions: BehaviorSubject<Permissions>;

  constructor() {
    this.permissions = new BehaviorSubject(Permissions.LOGGED_OUT);
  }

  getPermissions(): Observable<Permissions> {
    return this.permissions;
  }

}
