import { Component, OnInit } from '@angular/core';
import { Book, initialBook } from '../../../entities/book';
import { BooksService } from '../../data-access/books.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = initialBook;
  
  isBookAdded = false;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void { }

    // Add New
  create(): void {
    this.booksService
      .create(
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
    this.book.author= ''
  }

}
