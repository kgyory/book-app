import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './feature/add-user/add-user.component';
import { EditUserComponent } from './feature/edit-user/edit-user.component';
import { UserSearchComponent } from './feature/user-search/user-search.component';

const routes: Routes = [
  {
    path: 'user',
    children: [
        { path: 'search', component: UserSearchComponent },
        { path: 'add', component: AddUserComponent },
        { path: ':id', component: EditUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserServiceRoutingModule { }
