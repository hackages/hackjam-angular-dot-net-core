import {Book} from './../models/book';
import {Observable, Subject} from 'rxjs';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bs-dashboard',
  template: `
    <!-- Start: Search component /!\ c'est un BONUS-->
    <!-- Ne touchez pas si vous ne savez pas ce que vous faites-->
    <!--<bs-search-input [searchTerm$]="search$"></bs-search-input>-->
    <!-- End: Search component -->

    <!-- Start: List of books component -->
    <bs-books [books]="books$ "></bs-books>
    <!-- End: List of books component -->
  `
})
export class DashboardComponent implements OnInit {
  books$: Observable<Book[]>; // Use services instead
  search$: Subject<string> = new Subject<string>();

  constructor() {
  }

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }
}
