import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private edited:boolean;
  private usuario: any = {};
  private listaDeUsuarios:any=[];

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.usuario={};
    //this.initializeAccounts();
  }

  registrarse(){
  }

  login() {
    this.router.navigateByUrl('/historial');
  }
}