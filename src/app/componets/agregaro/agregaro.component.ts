import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Persona } from 'src/app/services/auth.service';

@Component({
  selector: 'app-agregaro',
  templateUrl: './agregaro.component.html',
  styleUrls: ['./agregaro.component.css']
})
export class AgregaroComponent implements OnInit {

  persona: Persona={
    idpersona: '',
  nombre:'',
  apepat:'',
  apemat:'',
  codigo:'',
  nombreo:''
  };

  constructor(private AuthService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  agregaro(){
    delete this.persona.idpersona;

    this.AuthService.addprac(this.persona).subscribe();
    this.router.navigate(['/admin']);
  }
}
