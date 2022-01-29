import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './feature/add-book/add-book.component';
import { BookSearchComponent } from './feature/book-search/book-search.component';

const routes: Routes = [
  {
    path: 'book',
    children: [
        { path: 'search', component: BookSearchComponent },
        { path: 'add', component: AddBookComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookServiceRoutingModule { }