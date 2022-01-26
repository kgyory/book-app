import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { DefaultKommentarService } from './default-kommentar.service';
import { Kommentar, KommentarNeu, KommentarServiceMsg } from '../../entities/kommentar';

@Injectable({
  providedIn: 'root',
  useClass: DefaultKommentarService
})
export abstract class KommentarService {
  abstract getById(id: Guid): Observable<Kommentar>;
  abstract new(kommentar: KommentarNeu): Observable<Kommentar>;
  abstract update(Kommentar: Kommentar, user_secrete: Guid): Observable<KommentarServiceMsg>;
  abstract delete(Kommentar: Kommentar, user_secrete: Guid): Observable<KommentarServiceMsg>;
}
