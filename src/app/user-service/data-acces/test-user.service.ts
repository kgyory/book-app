import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../entities/user';

@Injectable({
  providedIn: 'root'
})
export class TestUserService {

  url: string = 'http://localhost:4200//user';

  //Database
  users: User[] = [];

  constructor(private http: HttpClient) { 
    this.users.push({
      id: "0",
      username: "Hans Wurst",
      password: "geheim",
      mail: "test@gmail.com"
    });
  }

  find(mail: string): Observable<User | undefined> {
    let ret: User | undefined = undefined;

    for (const user of this.users) {
      if (user.mail == mail) {
        ret = user;
        break;
      }
    }

    return new Observable(observer=> {
      observer.next(ret);
    });
   }

  update(mail: string, username: string, password: string): Observable<User | undefined> {
    for (const user of this.users) {
      if (user.mail == mail) {
        user.username = username;
        user.password = password;
      }
    }
    
    return this.find(mail);
  }

  create(mail: string, username: string, password: string): Observable<User | undefined> {
    this.users.push({
        id: "", 
        username: username, 
        password: password,
        mail: mail
      });

    return this.find(mail);
  }

  delete(mail: string): Observable<boolean> {
    for (let i = 0; i < this.users.length; ) {
      const user = this.users[i];
      if (user.mail) {
        this.users.splice(i, 1);
      } else {
        i++
      }
    }

    return new Observable(observer=>observer.next(true));
  }
}