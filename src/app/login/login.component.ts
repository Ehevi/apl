import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public fireAuth: AngularFireAuth, public router: Router) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup ({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    let controls = this.loginForm.controls;
    if (controls.email.invalid || controls.password.invalid) {return; }
    let email = controls.email.value;
    let password = controls.password.value;

    this.fireAuth.auth.signInWithEmailAndPassword(email, password).then( credential => {
      this.router.navigate(['dashboard']);
    }).catch( error => {
      window.alert('Błędne logowanie!');
      this.loginForm.reset();
      this.router.navigate(['login']);
    });

  }

}
