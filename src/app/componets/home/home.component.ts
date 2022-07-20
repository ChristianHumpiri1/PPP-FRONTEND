import { Component, OnInit } from '@angular/core';
import {AuthService, Organizacion} from '../../services/auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//
ListarEquipo: Organizacion[] | undefined;

  constructor(private AuthService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.listarOrganizacion();
  }

  listarOrganizacion()
  {
    this.AuthService.getorganizacion().subscribe(
      res=>{
        console.log(res);
        this.ListarEquipo=<any>res;
      },
      err => console.log(err)
    );
  }
  eliminar(id:any)
  {
    this.AuthService.deleteorganizacion(id).subscribe(
      res=>{
        console.log('organizacion eliminada');
        this.listarOrganizacion();
      },
      err=> console.log(err)
      );
  }

  modificar(id:string | undefined){
    this.router.navigate(['/edit/'+id]);
  }
}
