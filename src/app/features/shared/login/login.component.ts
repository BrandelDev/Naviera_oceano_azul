import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserAuth } from 'src/app/Models/UserAuth';
import { AlertsService } from '../services/alerts.service';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/Models/NewUser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {

  signUpForm!: FormGroup;
  singInForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
     private authService:AuthService,
     private alertsService:AlertsService,
     private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      primerNombre: [''],
      segundoNombre:[''],
      primerApellido: [''],
      segundoApellido:[''],
      email: [''],
      contrasena: ['']
    });
    this.singInForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });

  }

  viewFormInformation(){
    console.log(this.signUpForm.value);

  }

  viewFormInformationSingIn(){
    const userData: UserAuth = this.singInForm.value as UserAuth

    this.authService.authenticate(userData).subscribe({
      next: (response) => {
       this.router.navigate(['/compra-tiquetes'])
      },
      error: (error) => {
        // Manejo del error
      }
    });
  }

  createNewUser(){
    const newUserData: NewUser = this.signUpForm.value as NewUser

    this.authService.createNewUser(newUserData).subscribe({
      next: (response) => {
      this.alertsService.success("Usuario creado", "");
      this.signUpForm.reset;
      },
      error: (error) => {
        // Manejo del error
      }
    });

  }

}
