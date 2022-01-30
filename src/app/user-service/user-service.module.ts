import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserSearchComponent } from './feature/user-search/user-search.component';
import { AddUserComponent } from './feature/add-user/add-user.component';
import { UserServiceRoutingModule } from './user-service-routing.module';
import { UserCardComponent } from './ui/user-card/user-card.component';

@NgModule({
    declarations: [
        UserSearchComponent,
        UserCardComponent,
        AddUserComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        UserServiceRoutingModule
    ],
    exports: [
        UserSearchComponent,
        AddUserComponent
    ]
})
export class UserServiceModule { }
