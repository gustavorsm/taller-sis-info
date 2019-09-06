import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private firstTime: boolean;
  private usuario: any = {};
  private errorMensaje: string;
  private carga: boolean = false;

  private usuarioErronea: boolean;
  private contrasenaErronea: boolean;
  private contrasenaConfirmacionErronea: boolean;
  private usuarioValida: boolean;
  private contrasenaValida: boolean;
  private confirmacionValida: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.usuario = {
      nombre: "",
      apellido:"",
      correo:"",
      fecha:"",
      contrasena: "",
    }
  }
 
  agregarUsuario(){
    this.usuario.auth=this.generateId();
    this.router.navigateByUrl('/login');
}

  generateId() {
    return Math.floor(Math.random() * 100000) + 100;
  }


}
