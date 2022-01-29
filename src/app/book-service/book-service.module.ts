import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchComponent } from './feature/book-search/book-search.component';
import { AddBookComponent } from './feature/add-book/add-book.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        BookSearchComponent,
        AddBookComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        BookSearchComponent,
        AddBookComponent
    ]
})
export class BookServiceModule { }