import { Component, Input, OnInit } from '@angular/core';
import { initialUser, User } from '../../../entities/user';
import { UserService } from '../../data-acces/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = initialUser();
  created: boolean = false;
  title: string = "Add User";

  constructor(public userService: UserService) { }

  ngOnInit(): void { }

  create(): void {
    console.log("Test");
    this.userService.create(this.user)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.created = true;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
    
  newUser(): void {
    this.user = initialUser();
  }
}
