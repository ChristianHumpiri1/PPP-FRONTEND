import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, Organizacion } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  organizacion: Organizacion={
    idorga:'',
    nombreo:'',
    ruc:''
  };

  constructor(private AuthService:AuthService,
              private router:Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    console.log('id de entrada: '+id_entrada);

    if(id_entrada){
      this.AuthService.getunaorganizacion(id_entrada).subscribe(
        res=>{
          this.organizacion = res;

        },
        err=>console.log(err)
      );
    }
  }

  modificar()
  {

    this.AuthService.editorganizacion(this.organizacion.idorga, this.organizacion).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/home']);
  }

}
