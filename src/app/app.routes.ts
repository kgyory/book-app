import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'book/search',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'book/search'
  }
];

