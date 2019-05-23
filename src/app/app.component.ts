import { Component } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*title:string = 'Angular Crud';*/
  
  msg:string = '';
  producto:boolean = false;
  factura:boolean = false;

  employees = [
    /*{codigo: 12, nombre: 'Portatil Hp Envy', valor:3500000},
    {codigo: 13, nombre: 'Portatil Asus x542ur', valor: 2800000},
    {codigo: 14, nombre: 'Portatil Thosiba x456', valor:1500000}*/
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;
  /*Manejo de vistas */
  vista(){
    this.producto = !this.producto;
  }
  vista2(){
    this.factura = !this.factura;
  }
  
  addEmployee():void{
    this.employees.push(this.model);
    this.msg = 'campo agregado';
  }

  deleteEmployee(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.employees.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editEmployee(i):void {
    this.hideUpdate = false;
    this.model2.codigo = this.employees[i].codigo;
    this.model2.nombre = this.employees[i].nombre;
    this.model2.valor = this.employees[i].valor;
    this.myValue = i;
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }

}