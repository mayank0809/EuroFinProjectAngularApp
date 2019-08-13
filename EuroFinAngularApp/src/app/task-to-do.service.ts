import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskToDoService {

  constructor(private httpClient : HttpClient) { }

  getTask(userName:any){
    return this.httpClient.get<any>('http://localhost:59692/api/mytodolist/getTaskByUser'+"/"+userName);
  };

  saveTask(userName:any , note:any){
    return this.httpClient.post<any>('http://localhost:59692/api/mytodolist',{"Note":note,"UserName":userName},{});
  }

  deleteTask(note:any){
    return this.httpClient.delete<any>('http://localhost:59692/api/mytodolist'+'/'+note.Id);
  }
}
