import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  addUser(gotEmail: string) {
    const emptyString: string [] = [];
    this.firestore.collection('users').doc(gotEmail).set({
      displayname: 'no-name-user',
      email: gotEmail,
      courses: emptyString,
      ratedcourses: emptyString,
      role: 'student'
    }).catch( error => {
      console.log(error);
    });
  }

  getUser(email: string) {
    return this.firestore.collection('users').doc(email).valueChanges();
  }

}
