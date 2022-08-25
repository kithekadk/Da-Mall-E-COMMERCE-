import { Injectable } from '@angular/core';


// interface data{
//   email:string,
//   password:string
// }
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  admin={
    email:'kakinyidk@gmail.com',
    password:'12345678'
  }
  
  login(){
    return this.admin
  }

  isAuthenticated(){
       
    return this.admin.email == localStorage.getItem('email') && this.admin.password == localStorage.getItem('password')
  }
}
