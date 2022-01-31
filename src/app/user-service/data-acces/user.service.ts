import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../entities/user';
import { DefaultUserService } from './default-user.service';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
  useClass: DefaultUserService
})
export abstract class UserService {

  url: string = 'https://wf.schertmi.net/v1.0/User';

  constructor(private http: HttpClient) { 
  }

  abstract all(): Observable<User[]>;
  
  abstract byMail(name: string): Observable<User>;
  abstract byId(id: Guid): Observable<User>;

  abstract find(name: string): Observable<User[]>;
  

  abstract create(user: User): Observable<User>;

  abstract update(user: User): Observable<User>;

  abstract delete(id: Guid): Observable<boolean>;
}
