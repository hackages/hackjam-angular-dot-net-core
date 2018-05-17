import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../models/book';
import {BaseUrlToken} from '../constants/tokens';

@Injectable()
export class BookService {
  booksUrl = 'books';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, @Inject(BaseUrlToken) private baseUrl: string) {
  }

  // Gets all the books from our mock server
  getBooks(): Observable<Book[]> {
    throw new Error('Oops. Not yet implemented...');
  }

  // Gets a book by its isbn from our mock server
  getBook(isbn: string): Observable<Book> {
    throw new Error('Oops. Not yet implemented...');
  }

  // Adds a new book and re-fetch the list of books.
  create(title: string): Observable<Book[]> {
    throw new Error('Oops. Not yet implemented...');
  }

  // Delete a book and re-fetch the list of books.
  delete(id: number): Observable<Book[]> {
    const url = `${this.booksUrl}/${id}`;
    throw new Error('Oops. Not yet implemented...');
  }

  // Update a book and re-fetch the list of books.
  update({id, title}): Observable<Book[]> {
    const url = `${this.booksUrl}/${id}`;
    throw new Error('Oops. Not yet implemented...');
  }
}
