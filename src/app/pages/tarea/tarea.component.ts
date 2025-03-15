import { Component, inject, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import {FormBuilder,FormGroup,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../../models/Task';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tarea',
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {

  @Input('id') idTask! : number;
  private taskService = inject(TaskService);
  public formBuild = inject(FormBuilder);

  public formTask:FormGroup = this.formBuild.group({
    titleTask: [''],
    descriptionTask:[''],
    stateTask:['']
  });

  constructor(private router:Router){}

  
  ngOnInit(): void {
    if(this.idTask != 0){
      this.taskService.getTaskById(this.idTask).subscribe({
        next:(data) =>{
          this.formTask.patchValue({
            titleTask:data.titleTask,
            descriptionTask:data.descriptionTask,
            stateTask:data.stateTask
          })
        },
        error:(err) =>{
          console.log(err.message)
        }
      })
    }
  }

saveTask(){
  const task : Task = {
    idTask : this.idTask,
    titleTask: this.formTask.value.titleTask,
    descriptionTask: this.formTask.value.descriptionTask,
    stateTask:this.formTask.value.stateTask
  }

  if(this.idTask == 0){
    this.taskService.createTask(task).subscribe({
      next:(data) =>{
        if(data.isSuccess){
          this.router.navigate(["/"]);
        }else{
          alert("Error al crear la tarea")
        }
      },
      error:(err) =>{
        console.log(err.message)
      }
    })
  }else{
    this.taskService.editTask(task).subscribe({
      next:(data) =>{
        if(data.isSuccess){
          this.router.navigate(["/"]);
        }else{
          alert("Error al editar la tarea")
        }
      },
      error:(err) =>{
        console.log(err.message)
      }
    })
  }


}

backTask(){
  this.router.navigate(["/"]);
}


}
