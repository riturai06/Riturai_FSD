import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { Usermodel } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  user: Usermodel[];
  isLoggedIn:boolean = false;
  token:string;


  constructor(private userService: UserserviceService,private route : Router) { }

  ngOnInit(): void {
    
    this.username= window.localStorage.getItem('username');
    this.token = window.localStorage.getItem('token');
    if(this.token != null && this.token.length > 10){
      this.isLoggedIn = true;
    }
    let resp = this.userService.getUser();
    resp.subscribe((data) =>{this.user= data;console.log('user',data)});
  }

}
