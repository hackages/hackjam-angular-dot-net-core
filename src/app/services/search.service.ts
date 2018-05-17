import {BaseUrlToken, SearchAPIToken} from './../constants/tokens';
import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../models/book';

@Injectable()
export class SearchService {
  constructor(
    private http: HttpClient,
    @Inject(BaseUrlToken) private baseUrl: string,
    @Inject(SearchAPIToken) private searchByTitleUrl: string
  ) {
  }

  // Implement search by title using searchByTitleUrl
  search(term$: Observable<string>): Observable<Book[]> {
    throw new Error('Oops. Not yet implemented...');
  }
}
