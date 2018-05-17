import {Component, Input} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'bs-search-input',
  template: `
    <div id="search-component">
      <h4>Search in your library</h4>
      <input id="search-box" #searchInput (input)="searchTerm$.next(searchInput.value)">
    </div>
  `,
  styles: [`
    .search-result {
      border-bottom: 1px solid gray;
      border-left: 1px solid gray;
      border-right: 1px solid gray;
      width: 195px;
      height: 20px;
      padding: 5px;
      background-color: white;
      cursor: pointer;
    }

    #search-box {
      width: 200px;
      height: 20px;
    }
  `]
})
export class SearchInputComponent {
  @Input() searchTerm$: Subject<string>;
}
