import { LoginComponent } from './login/login.component';
import { Usermodel } from './user';
import { UserserviceService } from './userservice.service';
export class Account{
    accountNo:string;
    ifsc:string;
    bankName:string;
    micrCode:string;
    user:Usermodel;
}

export class MutualFund{
    fundId:any;
    fundName:any;
    amount:any;
    timestamp:any;
    account:Account;
    
}