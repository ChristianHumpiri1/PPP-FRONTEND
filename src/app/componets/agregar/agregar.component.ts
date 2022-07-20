import { Component, OnInit } from '@angular/core';
import { AuthService, Organizacion } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  organizacion: Organizacion={
    idorga:'',
    nombreo:'',
    ruc:''
  };

  constructor(private AuthService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  agregar(){
    delete this.organizacion.idorga;

    this.AuthService.addorganizacion(this.organizacion).subscribe();
    this.router.navigate(['/home']);
  }
}
