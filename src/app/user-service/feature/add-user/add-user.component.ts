import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../entities/user';
import { UserService } from '../../data-acces/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user = {
    mail: '',
    username: '',
    password: ''
  } ;

  isUseradded = false;

  constructor(public userService: UserService) { }

  ngOnInit(): void { }

    // Add New
  create(): void {
    this.userService
      .create(
        this.user.mail,
        this.user.username,
        this.user.password)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.isUseradded = true;
        },
        error: (error) => {
          console.log(error);
        }
      });
      }
  
  
  // Reset on adding new
  
  newUser(): void {
    this.isUseradded = false;
    this.user.mail = '',
    this.user.password= ''
  }

}
