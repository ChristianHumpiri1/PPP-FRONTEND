import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { PrivateComponent } from './componets/private/private.component';
import { AdminComponent } from './componets/admin/admin.component';
import { LoginComponent } from './componets/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { JwtHelperService, JWT_OPTIONS }  from '@auth0/angular-jwt'
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AgregarComponent } from './componets/agregar/agregar.component';
import { ModificarComponent } from './componets/modificar/modificar.component';
import { BuscarComponent } from './componets/buscar/buscar.component';
import { ArchivosComponent } from './componets/archivos/archivos.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrivateComponent,
    AdminComponent,
    LoginComponent,
    AgregarComponent,
    ModificarComponent,
    BuscarComponent,
    ArchivosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [
    // JWT
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    // Token interceptor
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
