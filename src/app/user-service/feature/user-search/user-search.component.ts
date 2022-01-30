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
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.newSearch();
  }

  newSearch(): void {
    if (this.searchTerm) {
      this.userService.find(this.searchTerm)
        .subscribe((data) => {
          console.log(data);
          this.users = data ?? [];
        });
    } else {
      this.userService.all()
        .subscribe((data) => {
          this.users = data;
        });
    }
  }
}
