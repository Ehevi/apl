import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.scss']
})
export class RejestracjaComponent implements OnInit {

  constructor(private fireAuth: AngularFireAuth, private userService: UserService) { }

  passForm: FormGroup;

  ngOnInit() {
    this.passForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    let controls = this.passForm.controls;
    if (controls.email.invalid || controls.password.invalid) {return; }
    let email = controls.email.value;
    let password = controls.password.value;
    this.fireAuth.auth.createUserWithEmailAndPassword(email, password).then( credential => {
      this.userService.addUser(email);
      this.passForm.reset();
    }).catch( error => {
      window.alert('error!');
    });
  }
}
