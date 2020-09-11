import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usermodel} from './user';
import { ApiResponse } from './api.response';
import { map, filter, switchMap } from 'rxjs/operators';
import { Account, MutualFund } from './details';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  user: Usermodel[];
  account: Account[];
  funddetails: MutualFund[];
  fundId: string;
 
  
  
 
  constructor(private http : HttpClient) { }
  private baseUrlUser:string = 'http://localhost:8081';
  private baseUrlUsers:string = 'http://localhost:8083';
  private baseUrlUserss:string = 'http://localhost:8800';

  panNo: string= window.localStorage.getItem('panNo');
  username:string = window.localStorage.getItem('username');
 //fundId:any = window.localStorage.getItem('fundId');
 
 


  createUser(user: Usermodel):Observable<object> {
    return this.http.post(`${this.baseUrlUser}/users/sign-up`,user);
  }

  createAccount(account: Account):Observable<object> {
    const headers = new Headers;
  headers.append('Access-Control-Allow-Origin', '*');
  this.panNo = window.localStorage.getItem('panNo');
    throw this.http.post(`${this.baseUrlUser}/users/AddAccount/`+this.panNo,account);
  }

  createMf(uploadProductData:any):Observable<any> {
    return this.http.post(`${this.baseUrlUserss}/addMutualFunds`,uploadProductData, {observe:'response'});
  }

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrlUser}/user/login`, loginPayload);
  }

  getAccount():Observable<any>{
    
    return this.http.get(`${this.baseUrlUser}/users/getBypanNo/${this.panNo}`).pipe(map((account:any)=>account));
  }

  getMutualFund():Observable<any>{
    return this.http.get(`${this.baseUrlUser}/users/getTransactionDetails/${this.panNo}`);
  }

  getTransactionDetails():Observable<any>{
    this.fundId= window.localStorage.getItem('fundId');
    return this.http.get(`${this.baseUrlUser}/users/getInvestmentDetails/${this.panNo}/${this.fundId}`).pipe(map((funddetails:any)=>funddetails,this.funddetails));
  }

  addProduct(uploadProductData:any): Observable<any>{
    const headers = new Headers;
    headers.append('Access-Control-Allow-Origin', '*');
    this.panNo = window.localStorage.getItem('panNo');
    console.log(uploadProductData);
    return this.http.post(`${this.baseUrlUsers}/addAccount`,uploadProductData, {observe:'response'})
  } 

  getUser(): Observable<any>{
    return this.http.get(`${this.baseUrlUser}/users/getUser/${this.panNo}`);
  }

}