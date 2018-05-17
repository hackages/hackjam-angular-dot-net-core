import {BookService} from './books.service';
import {Observable} from 'rxjs';
import {Book} from './../models/book';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class BookResolver implements Resolve<Book> {
  constructor(private bookService: BookService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Book> {
    return this.bookService.getBook(route.params['isbn'])
      .pipe(map(book => book));
  }
}
