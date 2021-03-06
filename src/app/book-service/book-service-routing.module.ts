import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './feature/add-book/add-book.component';
import { BookDetailComponent } from './feature/book-detail/book-detail.component';
import { BookSearchComponent } from './feature/book-search/book-search.component';

const routes: Routes = [
  {
    path: 'book',
    children: [
        { path: 'search', component: BookSearchComponent },
        { path: 'add', component: AddBookComponent },
        { path: ':id', component: BookDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookServiceRoutingModule { }