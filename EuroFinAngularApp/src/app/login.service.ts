import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  register(registerForm:any){
    return this.httpClient.post<any>('http://localhost:59692/api/register',{"UserName":registerForm.UserName,
  "EmailId": registerForm.EmailId,"PhoneNo":registerForm.Phone,"Password":registerForm.Password},{});
  };

  login(loginForm:any){
    return this.httpClient.post<any>('http://localhost:59692/api/login',{"UserName":loginForm.UserName,
  "Password":loginForm.Password},{});
  }

  user:any;

}
