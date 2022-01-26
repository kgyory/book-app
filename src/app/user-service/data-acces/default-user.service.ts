import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../entities/user';

@Injectable({
  providedIn: 'root'
})
export class DefaultUserService {

  url: string = 'http://localhost:4200//user';

  constructor(private http: HttpClient) { 
  }

  find(mail: string): Observable<User | undefined> {
  
    const headers = new HttpHeaders()
    .set('Accept', 'application/json');
    const params = new HttpParams()
    .set('mail', mail);
    return this.http.get<User>(this.url, {headers, params})

   }

  update(mail: string, username: string, password: string): Observable<User | undefined> {
    
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('mail', mail)
      .set('username', username)
      .set('password', password)
  
      return this.http.put<User>(`${this.url}/${username}`, {headers, params});
  }

  create(mail: string, username: string, password: string): Observable<User | undefined> {
  
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
  
    const params = new HttpParams()
      .set('mail', mail)  
      .set('username', username)
      .set('password', password)
  
      return this.http.post<User>(this.url, {headers, params});
  }

  delete(mail: string): Observable<boolean> {
    
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

      this.http.delete<User>(`${this.url}/${mail}`, {headers}).subscribe(t => t);

      return new Observable(observer=>observer.next(true));
  }
}