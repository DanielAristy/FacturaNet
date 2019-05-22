import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Crud';

  empleados = [
    {'nombre': 'Daniel', posicion: 'Profesor', email:'dan.y.ac@hotmail.com'},
    {'nombre': 'Juan', posicion: 'Programador', email:'judac25@hotmail.com'},
    {'nombre': 'Pedro', posicion: 'Diseñador', email:'pedro22@hotmail.com'}
  ];

  model:any = {}
  //Agragar empleado
  addEmpleado(): void{
    this.empleados.push(this.model);
  }

  //Eliminar empleado
  deleteEmpleado():void{

  }

  //Editar empleado
  editEmpleado():void{

  }

  //Actualizar empleado
  updateEmpleado():void{
   
  }
}
