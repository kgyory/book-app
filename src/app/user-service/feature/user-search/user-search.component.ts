import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../../../entities/user';
import { UserService } from '../../data-acces/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  searchTerm: string = '';
  user: User | undefined;
  term: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  newSearch(): void {
    this.userService.find(this.searchTerm)
      .subscribe((data: User | undefined) => {
        this.user = data;
      });
  }

  // Change account credits
  update(): void {
    if (!this.user) return;

    this.userService
      .update(
        this.user.mail,
        this.user.username,
        this.user.password)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.user = response;
        },
        error: (error) => {
          console.log(error);
        }
      });
      }

  // Delete account 
  delete(): void {
    if (!this.user) return;

    this.userService
      .delete(
        this.user.username)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.user = undefined;
        },
        error: (error) => {
          console.log(error);
        }
      });
      }
}