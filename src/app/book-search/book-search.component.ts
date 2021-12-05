import { Component, OnInit } from '@angular/core';
import { Book } from '../entities/book';
import { BooksService } from '../services/books.service';
import { Form, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  message: string ='';
  
  id: number = 0;
  author: string = '';
  title: string = '';
  books: Array<Book> = []
  selectedBook: Book | any = null; //had to change from |null to |any because of save()

  isBookDeleted = false;

  constructor(private booksService: BooksService) {

  }

  ngOnInit(): void {
  }

  search(): void {
    this.booksService
      .find(this.author, this.title)
      .subscribe({
        next: (books: Book[]) => {
          this.books = books;
        },
        error: (errResp) => {
          console.error('Error loading books', errResp);
        }

      });
  }

  update(): void {
    this.booksService
      .update(
        this.selectedBook.id, 
        this.selectedBook.title, 
        this.selectedBook.author)
      .subscribe({
        next: book => {
          this.selectedBook = book;
          this.message = 'Update successful!';
        },
        error: errResponse => {
          this.message = 'Error on updating the Book';
          console.error(this.message, errResponse);
        }
      });
  }

  delete(): void {
    this.booksService
    .delete(
      this.selectedBook.id)
    .subscribe({
      next: (response) => {
        console.log(response);
        this.isBookDeleted = true;
      },
      error: (error) => {
        console.log(error);
      }

      });
  }

  select(b: Book): void {
    this.selectedBook = b;
  }
}
