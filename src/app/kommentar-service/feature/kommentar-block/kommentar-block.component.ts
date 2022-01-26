import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, Subject } from 'rxjs';
import { Kommentar, KommentarNeu, KommentarNeuInitial } from 'src/app/entities/kommentar';
import { User } from 'src/app/entities/user';
import { KommentarService } from '../../data-access/kommentar.service';

@Component({
  selector: 'app-kommentar-block',
  templateUrl: './kommentar-block.component.html',
  styleUrls: ['./kommentar-block.component.css']
})
export class KommentarBlockComponent implements OnInit {
  @Input() kommentar_id: Guid = Guid.create();
  @Input() user: User | undefined;

  @Input() allowNew: boolean = false;

  @Output() noContent = new EventEmitter();
  @Input() doReload: Observable<void> | undefined;

  kommentar: Kommentar | undefined;
  newComment: KommentarNeu | undefined;
  otherEditingSubj: Subject<Kommentar> = new Subject<Kommentar>();
  
  constructor(private kommentarService: KommentarService) {
  } 

  ngOnInit(): void {
    if (this.kommentar_id == undefined) return;

    if (this.doReload)
      this.doReload.subscribe(() => this.reload());

    this.reload();
    this.newCommentInit();
  }

  reload() {
    this.kommentarService.getById(this.kommentar_id).subscribe({
      next: komm => {
        if (komm == null) this.noContent.emit();
        this.kommentar = komm;
      },
      error: err => console.error('Kommentar loading error', err),
    });
  }


  private newCommentInit() {
    if (this.allowNew && this.user && this.kommentar_id) {
      this.newComment = KommentarNeuInitial(
        this.user.id.toString(),
        this.user.username
      );
      this.newComment.übergeordneterKommentarId = this.kommentar_id;
    }
  }

  deleteKommentar(kommentar: Kommentar) {
    if (this.kommentar) {
      const index = this.kommentar.weitereKommentare.indexOf(kommentar);
      this.kommentar?.weitereKommentare.splice(index, 1);
    }
  }

  createdKommentar(kommentar: Kommentar) {
    this.kommentar?.weitereKommentare.push(<Kommentar>kommentar);
    this.newCommentInit();
  }

  emitStartEditEventToOtherChildren(komment: Kommentar) {
    this.otherEditingSubj.next(komment);
  }

  sortBy(prop: string) {
    // @ts-ignore
    return this.kommentar?.weitereKommentare.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
  sortByDesc(prop: string) {
    // @ts-ignore
    return this.kommentar?.weitereKommentare.sort((a, b) => a[prop] < b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
}
