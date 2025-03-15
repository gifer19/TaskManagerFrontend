import { Component, inject, Inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-inicio',
  imports: [MatCardModule,MatTableModule,MatIconModule,MatButtonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  private taskService = inject(TaskService);
  public listTask:Task[]=[]
  public displayedColumns: string[]=['titleTask','descriptionTask','stateTask','accion'];

  getTask(){
    this.taskService.getTask().subscribe({
      next:(data)=>{
        if(data.length > 0){
          this.listTask = data;
        }
      },
     error:(err)=>{
      console.log(err.message);
     }
      
    })
  }

  constructor(private router:Router){
    this.getTask();
  }

  createTask(){
    this.router.navigate(['/Task',0]);
  }

  editTask(task:Task){
    this.router.navigate(['/Task',task.idTask]);
  }

  deleteTask(task:Task){
    if(confirm("Desea eliminar la tarea"+ task.titleTask)){
      this.taskService.deleteTaskById(task.idTask).subscribe({
        next:(data)=>{
          if(data.isSuccess){
            this.getTask();
          }else{
            alert("No se pudo eliminar");
          }
        },
       error:(err)=>{
        console.log(err.message);
       }
        
      })
    }
  }

}
