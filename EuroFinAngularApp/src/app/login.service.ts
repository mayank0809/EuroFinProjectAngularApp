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

  saveTask(note:any){
    return this.httpClient.post<any>('http://localhost:59692/api/mytodolist',{"Note":note},{});
  }

  deleteTask(note:any){
    return this.httpClient.delete<any>('http://localhost:59692/api/mytodolist'+'/'+note.Id);
  }

}
