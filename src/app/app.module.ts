import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookServiceModule } from './book-service/book-service.module';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { UserServiceModule } from './user-service/user-service.module';
import { KommentarServiceModule } from './kommentar-service/kommentar-service.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    BookServiceModule,
    UserServiceModule,
    KommentarServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
