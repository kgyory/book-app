import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Subject } from 'rxjs';
import { Book } from 'src/app/entities/book';
import { KommentarNeuInitial } from 'src/app/entities/kommentar';
import { initialUser, User } from 'src/app/entities/user';
import { KommentarService } from 'src/app/kommentar-service/data-access/kommentar.service';
import { BooksService } from '../../data-access/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book | undefined;
  tmpUser: User = initialUser();
  reloadCommentBlock = new Subject<void>();

  constructor(
      private route: ActivatedRoute, 
      private booksService: BooksService,
      private kommentarService: KommentarService) 
  { 
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

  createBookComment() {
    if (!this.book) return;
    
    let comment = KommentarNeuInitial(this.book.id.toString(), this.book.author);
    comment.id = this.book.id;
    comment.schreibSchlüssel = this.book.id;
    comment.title = this.book.title;

    this.kommentarService.new(comment).subscribe({
      next: (c) => {
        console.log(c);
        this.reloadCommentBlock.next(undefined);
      },
      error: console.log
    });
  }
}
