import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Book } from 'src/app/entities/book';
import { BooksService } from '../../data-access/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book | undefined;

  constructor(private route: ActivatedRoute, private booksService: BooksService) { 
    this.route.paramMap.subscribe(
      params => {
        this.booksService.byId(Guid.parse(params.get("id")!))
          .subscribe({
            next: (response) => {
              console.log(response);
              this.book = response;
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

}
