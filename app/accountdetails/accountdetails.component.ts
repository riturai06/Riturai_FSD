import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute } from '@angular/router';
import { MutualFund } from '../details';
import { Usermodel } from '../user';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {
  panNo: string;
  account: Account[];
  fundDetails : MutualFund[];
  user : Usermodel[];
  username : string;
  constructor(private userService : UserserviceService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.username= window.localStorage.getItem('username');
    let resp = this.userService.getAccount();
    resp.subscribe((data) =>{this.account= data;console.log('account',data)});
  }

}
