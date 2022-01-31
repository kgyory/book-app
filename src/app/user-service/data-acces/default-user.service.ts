import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../entities/user';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class DefaultUserService {

  url: string = 'https://wf.schertmi.net/v1.0/User';

  headers: HttpHeaders = new HttpHeaders()
    .set('Accept', 'application/json');

  constructor(private http: HttpClient) { 
  }

  all(): Observable<User[]> {
    return this.http.get<User[]>(this.url, { headers: this.headers });
  }

  byMail(mail: string): Observable<User> {
    return this.http.get<User>(`${this.url}/mail/${mail}`, { headers: this.headers });
  }

  byId(id: Guid): Observable<User> {
    return this.http.get<User>(`${this.url}/id/${id.toString()}`, { headers: this.headers });
  }

  find(name: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/find/${encodeURIComponent(name)}`, 
      { headers: this.headers });
  }

  create(user: User): Observable<User> {
    const params = new HttpParams()
      .set('id', user.id.toString())
      .set('username', user.username)  
      .set('password', user.password)
      .set('mail', user.mail);
  
    return this.http.post<User>(this.url, null, { headers: this.headers, params });
  }

  update(user: User): Observable<User> {
    const params = new HttpParams()
      .set('id', user.id.toString())
      .set('username', user.username)  
      .set('password', user.password)
      .set('mail', user.mail);
  
    return this.http.put<User>(this.url, null, { headers: this.headers, params });
  }

  delete(id: Guid): Observable<boolean> {
    return new Observable(observer => {
      const params = new HttpParams()
        .set('id', id.toString());
  
      this.http.delete<User>(this.url, { headers: this.headers, params }).subscribe({
        next: () => observer.next(true),
        error: () => observer.next(false)
      });
    });
  }
}