import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000';
  private URL1 = 'http://localhost:3000/user/organizacion'
  private URL2 = 'http://localhost:3000/user/organizacion/personaorga'


  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private firestore: Firestore) { }

  singin(user:any){
    return this.http.post(`${this.URL}/user/singin`,user);
  }

  isAuth():boolean{
    const token = localStorage.getItem('token');
    if((token && this.jwtHelper.isTokenExpired(token)) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }

 //get or
 getorganizacion()
 {
   return this.http.get(this.URL+'/user/organizacion');
 }


 //get una or
 getunaorganizacion(id:string | undefined){
   return this.http.get(this.URL1+'/'+id);
 }


 //agregar or
 addorganizacion(organizacion:Organizacion)
 {
   return this.http.post(this.URL1,organizacion );
 }

 //add practorg
 addprac(persona:Persona)
 {
   return this.http.post(this.URL2,persona );
 }


 //eliminar or
 deleteorganizacion(id:number){
   return this.http.delete(this.URL+'/user/organizacion/delete/'+id);
 }

 //modificar or
 editorganizacion(id:string | undefined, organizacion:Organizacion){
   return this.http.put(this.URL1+'/update/'+id, organizacion);
 }

 getpersona()
 {
   return this.http.get(this.URL+'/user/persona');
 }
 deletepersona(id:number){
  return this.http.delete(this.URL+'/user/persona/delete/'+id);
}
getpersonaorg()
 {
   return this.http.get(this.URL+'/user/personaorg');
 }

}


export interface Organizacion{
 idorga?: string;
 nombreo?:string;
 ruc?:string;
}
export interface Persona{
  idpersona?: string;
  nombre?:string;
  apepat?:string;
  apemat?:string;
  codigo?:string;
  nombreo?:string;
 }




