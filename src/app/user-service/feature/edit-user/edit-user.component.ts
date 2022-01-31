import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../data-acces/user.service';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User | undefined;
  title: string = "Edit User";
  deleted: boolean = false;

  constructor(private route: ActivatedRoute, private userService: UserService) { 
    this.route.paramMap.subscribe(
      params => {
        this.userService.byId(Guid.parse(params.get("id")!))
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
    );
  }

  ngOnInit(): void {
  }

  update(): void {
    if (!this.user) return;

    this.userService
      .update(this.user)
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
  
  delete(): void {
    if (!this.user) return;

    this.userService
      .delete(this.user.id)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.deleted = true;
          this.user = undefined;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  deleteMore(): void {
    alert("No more deleting!");
  }
}
