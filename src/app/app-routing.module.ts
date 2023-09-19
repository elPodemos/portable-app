import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PortableComponent } from './portable/portable.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'portables', component: PortableComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
