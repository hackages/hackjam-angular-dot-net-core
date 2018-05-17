import {Book} from './../../models/book';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'bs-books',
  template: `
    <h3>All Books</h3>
    <br>
    <hr>
    <div class="grid grid-pad">
      <a [routerLink]="['', 'books', book.isbn]"
         class="col-1-4" ngFor="let book in books">
        <div class="module hero">
          <h4>{book.title}</h4>
        </div>
      </a>
    </div>
  `,
  styleUrls: ['books.component.css']
})
export class BooksComponent {
  @Input() books: Book[];
}
