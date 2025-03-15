import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TareaComponent } from './pages/tarea/tarea.component';

export const routes: Routes = [
    {path:'',component:InicioComponent},
    {path:'Inicio',component:InicioComponent},
    {path:'Task/:id',component:TareaComponent},
];
