import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bms';
  //buttonDisable:any;
panNo:string;
token:string;
username:string;
isLoggedIn:boolean = false;
userNewName:string = window.localStorage.getItem('username');
fundId: any;

ngOnInit(): void {

  this.username= window.localStorage.getItem('username');
  this.token = window.localStorage.getItem('token');
  this.fundId = window.localStorage.getItem('funddetails.fundId');
  if(this.token != null && this.token.length > 10){
    this.isLoggedIn = true;
  }
  // if(window.localStorage.getItem('token')!=null){
  //   this.buttonDisable = 'none';
  // }

}
}



