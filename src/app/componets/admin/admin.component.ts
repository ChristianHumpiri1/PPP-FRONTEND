import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Persona } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ListarPersona: Persona[] | undefined;
  constructor(private AuthService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.listarPersona();
  }

  listarPersona()
  {
    this.AuthService.getpersonaorg().subscribe(
      res=>{
        console.log(res);
        this.ListarPersona=<any>res;
      },
      err => console.log(err)
    );
  }

  eliminarp(id:any)
  {
    this.AuthService.deletepersona(id).subscribe(
      res=>{
        alert('Persona eliminada');
        this.listarPersona();
      },
      err=> console.log(err)
      );
  }

}
