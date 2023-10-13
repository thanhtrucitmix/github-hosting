import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  {path: 'listUsers', component: UserListComponent},
  {path: 'userAdd', component: UserformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
