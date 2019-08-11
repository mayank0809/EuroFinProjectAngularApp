import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskToDoService {

  constructor(private httpClient : HttpClient) { }

  getTask(){
    return this.httpClient.get<any>('http://localhost:59692/api/mytodolist');
  };

  saveTask(note:any){
    return this.httpClient.post<any>('http://localhost:59692/api/mytodolist',{"Note":note},{});
  }
}
