import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './book-service/feature/add-book/add-book.component';
import { BookSearchComponent } from './book-service/feature/book-search/book-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'search', component: BookSearchComponent },
  { path: 'add', component: AddBookComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }