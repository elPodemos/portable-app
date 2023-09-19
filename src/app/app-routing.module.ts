import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PortableComponent } from './portable/portable.component';

const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'portables', component: PortableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
