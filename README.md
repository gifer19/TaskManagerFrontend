# TaskManager

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## CONFIGURACION PROYECTO TASKMANAGERFRONT

Para poder ejecutar el Frontend se debe ejecutar el comando npm i para realizar todas las actualizaciones correspondientes, se debe adicionar el paquete ng add @angular/material, se recomienda verificar desde el terminal estar ubicado en el proyecto, en este caso el ejemplo es  C:\Users\acer\Desktop\TaskManagerFront\taskManager>

## EJECUTAR EN SQL SERVER
reate database DBTaskM


GO

use DBTaskM

create proc sp_listTask
as
begin
	select
	idTask,
	titleTask,
	stateTask
	from Task
end

go

create proc sp_getTask(
@IdTask int 
)
as
begin
	select
	idTask,
	titleTask,
	descripctionTask
	stateTask
	from Task where idTask=@IdTask
end

go

create proc sp_createTask(
@TitleTask varchar(50),
@Descripcion varchar (100),
@State varchar (50)
)
as
begin

INSERT INTO Task
           (titleTask
           ,descripctionTask
           ,stateTask)
     VALUES
           (@TitleTask,
            @Descripcion,
            @State)

end 
go

create proc sp_updateTask(
@IdTask int,
@TitleTask varchar(50),
@DescriptionTask varchar (100),
@State varchar (50)
)
as
begin

        Update Task
		set
           titleTask = @TitleTask,
           descripctionTask = @Descripcion,
           stateTask = @State
		where idTask = @IdTask
     
end 

go 
create proc sp_deleteTask(
@IdTask int
)
as
begin
     delete from Task
		where idTask = @IdTask
     
end 
