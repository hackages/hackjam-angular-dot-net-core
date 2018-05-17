import {tap} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {BookService} from '../../services/books.service';
import {Book} from '../../models/book';

@Component({
  selector: 'bs-book-detail',
  styleUrls: ['book-detail.component.css'],
  template: `
    <div>
      <h2>{{book?.title}} details!</h2>
      <div>
        <label>ISBN: </label>{{book?.isbn}}
      </div>
      <div>
        <label>Title: </label>
        <input [value]="book?.title" placeholder="title">
      </div>
      <button (click)="goBack()">Back</button>
      <button (click)="save()">Save</button>
    </div>
  `
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bookService: BookService
  ) {
  }

  ngOnInit(): void {
    this.route.data
      .pipe(tap(console.log))
      .subscribe(data => (this.book = data['book'] as Book));
  }

  save(): void {
    // TODO
    // control Observable
  }

  goBack(): void {
    this.location.back();
  }
}
