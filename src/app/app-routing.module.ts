import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './componets/admin/admin.component';
import { AgregarComponent } from './componets/agregar/agregar.component';
import { AgregaroComponent } from './componets/agregaro/agregaro.component';
import { BuscarComponent } from './componets/buscar/buscar.component';
import { HomeComponent } from './componets/home/home.component';
import { LoginComponent } from './componets/login/login.component';
import { PrivateComponent } from './componets/private/private.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'private', component: PrivateComponent, canActivate: [AuthGuard] },
  { path: 'buscar', component: BuscarComponent},
  { path: 'add', component: AgregarComponent},
  { path: 'addo', component: AgregaroComponent},
  { path: 'edit/:id', component: AgregarComponent},
  { path: 'admin', component: AdminComponent,canActivate:[RoleGuard], data: { expectedRole: 'admin' } },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
