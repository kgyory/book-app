import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Kommentar, KommentarNeu } from 'src/app/entities/kommentar';
import { KommentarService } from '../../data-access/kommentar.service';

@Component({
  selector: 'app-kommentar',
  templateUrl: './kommentar.component.html',
  styleUrls: ['./kommentar.component.css']
})
export class KommentarComponent {
  // @ts-ignore
  @Input() kommentar: Kommentar;
  @Input() allowEdit: boolean | undefined = false;

  @Input() isNew: boolean = false;
  isEditing: boolean = false;
  isSaving: boolean = false;

  @Output() deletedEvent = new EventEmitter<Kommentar>();
  @Output() startEditEvent = new EventEmitter<Kommentar>();
  @Output() createdEvent = new EventEmitter<Kommentar>();
  
  private otherEditingSubs: Subscription | undefined;
  @Input() otherEditingObs: Observable<Kommentar> | undefined;

  constructor(private kommentarService: KommentarService) {
  }

  ngOnInit(){
    this.isEditing = this.isNew;
    
    if (this.otherEditingObs)
      this.otherEditingSubs = this.otherEditingObs.subscribe((editKomment) => {
        if (editKomment != this.kommentar) this.isEditing = false;
      });
  }

  ngOnDestroy() {
    if (this.otherEditingSubs)
      this.otherEditingSubs.unsubscribe();
  }

  delete(): void {
    if (!this.kommentar) return;
    

    this.kommentarService.delete(this.kommentar, this.kommentar.id).subscribe({
        next: res => {
          if (res.successful) {
            this.deletedEvent.emit(this.kommentar);
          } else {
            console.error(`Konnte Kommentar nicht löschen: ${res.errorMsg}`);
            alert(res.errorMsg);
          }
        },
        error: err => { 
          console.error(`Fehler bei Kommentar löschen:`);
          console.error(err);
        }
      });
  }

  save(): void {
    if (!this.kommentar) return;

    this.isSaving = true;

    if (this.isNew) {
      this.kommentarService.new(<KommentarNeu>this.kommentar).subscribe({
        next: res => {
          console.log(res);
          this.createdEvent.emit(this.kommentar);
          this.isSaving = false;
        },
        error: console.log
      });
    } else {
      this.kommentarService.update(this.kommentar, this.kommentar.id).subscribe({
        next: res => {
          console.log(res);
          this.isEditing = false;
          this.isSaving = false;
        },
        error: console.log
      });
    }
  }

  edit(): void {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.startEditEvent.emit(this.kommentar);
    }
  }
}
