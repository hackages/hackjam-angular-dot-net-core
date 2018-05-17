import {routes} from './app.routing';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
// Imports for loading & configuring the in-memory web api
// Our components
import {AppComponent} from './app.component';
import {BooksComponent} from './components/books/books.component';
import {SearchInputComponent} from './components/search.input.component';
import {BookDetailComponent} from './components/book-detail/book-detail.component';
import {HeaderComponent} from './components/header/header.component';
// Services
import {AuthGuard} from './services/auth.guard';
import {SearchService} from './services/search.service';
import {BookService} from './services/books.service';
import {BaseUrl, BaseUrlToken, SearchAPI, SearchAPIToken} from './constants/tokens';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './components/dashboard.component';
import {BookResolver} from './services/book.resolver';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {enableTracing: false}),
  ],
  declarations: [
    AppComponent,
    BooksComponent,
    SearchInputComponent,
    BookDetailComponent,
    DashboardComponent,
    HeaderComponent
  ],
  providers: [
    AuthGuard,
    BookResolver,
    BookService,
    SearchService,
    {
      provide: SearchAPIToken,
      useValue: SearchAPI
    },
    {
      provide: BaseUrlToken,
      useValue: BaseUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
