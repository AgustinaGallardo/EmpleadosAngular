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
  empresa = "Google";

 
  //getEdad(){
    //return this.edad;
  //}

//llamaEmpresa(value:String){

usoRegistrado=false;

textoDeRegistro="No existe nadie registrado";

getRegistroUsuario(){
  this.usoRegistrado=false;
}

setUsuarioRegistrado(event:Event){

 // alert("Usuario registrado!!");

 //this.textoDeRegistro= "El usuario ya esta registrado";

 alert(event.target);

 if((<HTMLInputElement>event.target).value=="si"){

  this.textoDeRegistro= "El usuario ya esta registrado";
 }else{
  this.textoDeRegistro="No existe nadie registrado";
 }


}

}



