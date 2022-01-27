import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../entities/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  url: string = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { 
  }

  find(author: string, title: string): Observable<Book[]> {
  
    const headers = new HttpHeaders()
    .set('Accept', 'application/json');

    if (author.length > 0 && title.length >0)
      {
      const params = new HttpParams()
        .set('author', author)
        .set('title', title);
      
      return this.http.get<Book[]>(this.url, {headers, params})
      }

    else if (author.length > 0)
      {
        const params = new HttpParams()
        .set('author', author)
      
      return this.http.get<Book[]>(this.url, {headers, params})
      }
    
    else if (title.length > 0)
      {
        const params = new HttpParams()
        .set('title', title);
      
      return this.http.get<Book[]>(this.url, {headers, params})

      }
    
    return this.http.get<Book[]>(this.url, {headers});  //this will never happen, it is only here because otherwise there is an 
                                                        //error that function doensn't return anything
                                                        //there is certainly a nicer way of searching only with title or author
   }

  update(id: number, title: string, author: string): Observable<Book> {
    
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('author', author)
      .set('title', title)
  
      return this.http.put<Book>(`${this.url}/${id}`, {headers, params});
  }

  create(id: number, title: string, author: string): Observable<Book> {
  
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
  
    const params = new HttpParams()
      .set('id', id)  
      .set('author', author)
      .set('title', title)
  
      return this.http.post<Book>(this.url, {headers, params});
  }

  delete(id: number): Observable<Book> {
    
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

      return this.http.delete<Book>(`${this.url}/${id}`, {headers});
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