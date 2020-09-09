import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { Account} from '../details';
import { Usermodel } from '../user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  abc: any;
  isLoggedIn:boolean = false;
  panNo:string;
  token:string;
  username: string;



  constructor(private userService:UserserviceService,private route : Router) { }
  account :Account = new Account();
  user : Usermodel = new Usermodel();
  ngOnInit(): void {
    this.panNo = window.localStorage.getItem('panNo');
    this.token = window.localStorage.getItem('token');
    this.username = window.localStorage.getItem('username');

    if(this.token != null && this.token.length > 10){
      this.isLoggedIn = true;
    }
  }

   onFormSubmit(){

    // this.userService.createAccount(this.account).subscribe(data => console.log(data), error => console.log(error));
    // alert("Account Created");
    //  this.route.navigateByUrl("/dashboard");
    // //this.myForm.reset();

    const uploadProductData = new FormData();
    uploadProductData.append('accountNo', this.account.accountNo);
    uploadProductData.append('ifsc',this.account.ifsc); 
    uploadProductData.append('bankName', this.account.bankName);
    uploadProductData.append('micrCode', this.account.micrCode);
    uploadProductData.append('username',this.username)
    console.log("data");
    console.log(uploadProductData.get('account'));
    this.userService.addProduct(uploadProductData).subscribe((response) => {
            if (response.status === 200) {
             
              alert("Product added Successfully");
           } else {
             alert("adding Product failed Try Again");
           }

   }
  
    );
    alert("Product Added to Seller Id: ");
    this.route.navigateByUrl("/dashboard");
}
}
  // onSave(accountNo:string,ifsc:string,bankName:string,micrCode:string){
    
  //   //console.log("aaaaaaaaaaaaaaaa");
  //   let account:Account = new Account();
    
  //   account.accountNo = accountNo;
  //   account.ifsc = ifsc;
  //   account.bankName = bankName;
  //   account.micrCode = micrCode;
  //   //console.log(cart.unitPrice);
    
  //   this.userService.addToAccount(account).subscribe(abc=>{this.abc=abc;},
  //   error => console.log('ERRORrrrrrrrrrrrrrrrrrrrrr: ' + error));
  //   alert("Account Added");
  //   //this.productService.getCustomersByString1("s");
    
  // }

