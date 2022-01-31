import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: User | undefined;
  @Input() title: string | undefined;

  @Output() updatedEvent = new EventEmitter<User>();
  @Output() deletedEvent = new EventEmitter<User>();
  @Output() createdEvent = new EventEmitter<User>();
  @Input() updateBtn: boolean = false;
  @Input() deleteBtn: boolean = false;
  @Input() createBtn: boolean = false;

  updated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  update(): void {
    this.updatedEvent.emit(this.user);
    this.updated = true
  }

  delete(): void {
    this.deletedEvent.emit(this.user);
  }

  create(): void {
    this.createdEvent.emit(this.user);
  }
}
