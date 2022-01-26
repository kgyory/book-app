import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kommentar, KommentarNeu, KommentarServiceMsg } from '../../entities/kommentar';
import { Guid } from 'guid-typescript';
import { map, Observable } from 'rxjs';
import { KommentarService } from './kommentar.service';

@Injectable()
export class DefaultKommentarService implements KommentarService {
  url: string = "https://wf.schertmi.net";

  constructor(private http: HttpClient) { 
  }
  
  private headers = new HttpHeaders()
    .set('Accept', 'application/json');

  getById(id: Guid): Observable<Kommentar> {
    return this.http.get<Kommentar>(`${this.url}/v1.0/Kommentar/${id}`, { headers: this.headers });
  }

  new(kommentar: KommentarNeu): Observable<Kommentar> {
    let newComment = {
      id: kommentar.id.toString(),
      title: kommentar.title,
      name: kommentar.name,
      userId: kommentar.userId,
      kommentar: kommentar.kommentar,
      übergeordneterKommentarId: kommentar.übergeordneterKommentarId?.toString(),
      schreibSchlüssel: kommentar.schreibSchlüssel.toString()
    };
    
    return this.http.post<Kommentar>(`${this.url}/v1.0/Kommentar`, 
      newComment, 
      { headers: this.headers });
  }

  update(kommentar: Kommentar, user_secrete: Guid): Observable<KommentarServiceMsg>{
    return this.http.put(`${this.url}/v1.0/Kommentar`, {
      id: kommentar.id.toString(),
      schreibSchlüssel: user_secrete.toString(),
      kommentar: kommentar.kommentar
    }, { headers: this.headers, observe: 'response'}).pipe(map((resp) => {
      const ret: KommentarServiceMsg =  { errorMsg: "", successful: true};

      if (resp.status != 205) {
        ret.successful = false
        if (resp.status == 400) ret.errorMsg = "Konnte Kommentar nicht bearbeiten";
        if (resp.status == 405) ret.errorMsg = "Bearbeiten nicht erlaubt!";
      }

      return ret;
    }));
  }

  delete(kommentar: Kommentar, user_secrete: Guid): Observable<KommentarServiceMsg>{
    return this.http.delete(`${this.url}/v1.0/Kommentar`, {
      observe: 'response',
      headers: this.headers,
      body: {
        id: kommentar.id.toString(),
        schreibSchlüssel: user_secrete.toString()
      }
    }).pipe(map((resp) => {
      const ret: KommentarServiceMsg =  { errorMsg: "", successful: true};
      
      if (resp.status != 204) {
        ret.successful = false
        if (resp.status == 400) ret.errorMsg = "Konnte Kommentar nicht löschen";
        if (resp.status == 405) ret.errorMsg = "Löschen nicht erlaubt!";
      }

      return ret;
    }));
  }
}
