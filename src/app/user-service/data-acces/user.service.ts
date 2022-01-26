import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../entities/user';
import { TestUserService } from './test-user.service';

@Injectable({
  providedIn: 'root',
  useClass: TestUserService
})
export abstract class UserService {

  url: string = 'http://localhost:4200//user';

  constructor(private http: HttpClient) { 
  }

  abstract find(mail: string): Observable<User | undefined>;

  abstract update(mail: string, username: string, password: string): Observable<User | undefined>;

  abstract create(mail: string, username: string, password: string): Observable<User | undefined>;

  abstract delete(mail: string): Observable<boolean>;
}