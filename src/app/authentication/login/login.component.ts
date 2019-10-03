import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private fb:FormBuilder,private loginservice:LoginService) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(3),Validators.maxLength(5)]]
    })
  }

  login(){
    console.log(this.loginForm.value);
    this.loginservice.loginUser(JSON.stringify(this.loginForm.value));
    this.loginForm.reset();
  }
}
