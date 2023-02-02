import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']

 //ulizar un inline
 //styles: ["p{background-color: brown;"]
})

export class EmpleadoComponent {

  nombre = "Juan";
  apellido = "Diaz";
  edad= 33;
  empresa = "AgularEmpresa";

}
