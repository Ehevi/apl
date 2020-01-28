import { Injectable, NgZone } from '@angular/core';
import { Permissions } from '../types/permissions';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../types/user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { PermsService } from './perms.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  permsService: PermsService;
  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.permsService = new PermsService();
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

   LogIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
          this.permsService.updatePermission(Permissions.STUDENT);
        });
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  Register(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  LogOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.userData.permissions = new BehaviorSubject(Permissions.LOGGED_OUT);
      this.router.navigate(['']);
    });
  }

}
