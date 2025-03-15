import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appSettings } from '../settings/appSettings';
import { Task } from '../models/Task';
import { ResponseAPI } from '../models/ResponseAPI';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private http = inject(HttpClient);
  private apiURL:string = appSettings.apiUrl + "Task";

  constructor() { }


  getTask(){
   return  this.http.get<Task[]>(this.apiURL);
  }
 
  getTaskById(id:number){
    return  this.http.get<Task>(`${this.apiURL}/${id}`);
   }

   createTask(task:Task){
    return  this.http.post<ResponseAPI>(this.apiURL,task);
   }

   editTask(task:Task){
    return  this.http.put<ResponseAPI>(this.apiURL,task);
   }

   deleteTaskById(id:number){
    return  this.http.delete<ResponseAPI>(`${this.apiURL}/${id}`);
   }
}
