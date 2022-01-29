import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchComponent } from './feature/book-search/book-search.component';
import { AddBookComponent } from './feature/add-book/add-book.component';
import { SharedModule } from '../shared/shared.module';
import { BookServiceRoutingModule } from './book-service-routing.module';

@NgModule({
    declarations: [
        BookSearchComponent,
        AddBookComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        BookServiceRoutingModule
    ],
    exports: [
        BookSearchComponent,
        AddBookComponent
    ]
})
export class BookServiceModule { }