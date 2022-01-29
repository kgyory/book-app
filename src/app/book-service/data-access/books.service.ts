import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../entities/book';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  url: string = 'https://wf.schertmi.net/v1.0/Book/';

  constructor(private http: HttpClient) { 
  }

  find(author: string, title: string): Observable<Book[]> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    let params = new HttpParams();
    if (author) params = params.set('author', author);
    if (title) params = params.set('title', title);

    return this.http.get<Book[]>(this.url, { headers, params });
   }

  update(book: Book): Observable<Book> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    let params = new HttpParams()
      .set('id', book.id.toString())
      .set('author', book.author)
      .set('title', book.title)
      .set('isbn', book.isbn)
      .set('coverLink', book.cover_link);

    console.log(params.toString());
  
    return this.http.put<Book>(this.url, null, { headers, params });
  }

  create(title: string, author: string): Observable<Book> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
  
    const params = new HttpParams()
      .set('author', author)
      .set('title', title);
  
    return this.http.post<Book>(this.url, null, { headers, params });
  }

  delete(id: Guid): Observable<Book> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
  
      const params = new HttpParams()
        .set('id', id.toString());

      return this.http.delete<Book>(this.url, { headers, params });
  }
}


/* 
TODO in create:
- it posts the data but it will not write to the database

TODO in update:
- Put + id doesen't really work well, in the booklist it creates a mess.

TODO in delete:
- Reset the form after deleting

TODO in search:
- Reset form button
- Make search with one parameter nicer
*/    