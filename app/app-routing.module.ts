import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { MutualfundComponent } from './mutualfund/mutualfund.component';
import { HomeComponent } from './home/home.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { LogoutComponent } from './logout/logout.component';
import { TransactionsComponent } from './transactions/transactions.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'account',component:AccountComponent},
  {path:'mutualfund',component:MutualfundComponent},
  {path:'accountdetails',component:AccountdetailsComponent},
  {path:'transactions',component:TransactionsComponent},
  {path:'logout',component:LogoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
