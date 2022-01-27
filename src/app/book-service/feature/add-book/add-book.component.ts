import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../data-access/books.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book = {
    title: '',
    author: '',
    id: 0,
  } ;
  
  isBookAdded = false;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void { }

    // Add New
  create(): void {
    this.booksService
      .create(
        this.book.id,
        this.book.title,
        this.book.author)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.isBookAdded = true;
        },
        error: (error) => {
          console.log(error);
        }
      });
      }
  
  
  // Reset on adding new
  
  newBook(): void {
    this.isBookAdded = false;
    this.book.title = '',
    this.book.author= '',
    this.book.id = 0
  }

}
