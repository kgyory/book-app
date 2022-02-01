import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchComponent } from './feature/book-search/book-search.component';
import { AddBookComponent } from './feature/add-book/add-book.component';
import { SharedModule } from '../shared/shared.module';
import { BookServiceRoutingModule } from './book-service-routing.module';
import { BookDetailComponent } from './feature/book-detail/book-detail.component';
import { KommentarServiceModule } from '../kommentar-service/kommentar-service.module';

@NgModule({
    declarations: [
        BookSearchComponent,
        AddBookComponent,
        BookDetailComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        BookServiceRoutingModule,
        KommentarServiceModule
    ],
    exports: [
        BookSearchComponent,
        AddBookComponent,
        BookDetailComponent
    ]
})
export class BookServiceModule { }
