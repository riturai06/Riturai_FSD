import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder : FormBuilder, private router: Router, private userService: UserserviceService) { }
  userForm : any;
  ngOnInit(): void {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });


    
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value

    }
    this.userService.login(loginPayload).subscribe(data => {
      //debugger;
      if(data.status === 200) {
        window.localStorage.setItem('token', data.result.token);
        window.localStorage.setItem('username', data.result.username);

        //console.log("tokennnnnnn "+data.result.token+" usernameeeeeeeee "+data.result.username+" buyerrid"+data.result.buyerId);
        this.router.navigateByUrl("/home");
      }else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }

}




