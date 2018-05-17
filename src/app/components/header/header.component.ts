import {Component, Input} from '@angular/core';

@Component({
  selector: 'bs-header',
  template: `
    <!-- Start: Header component -->
    <h1>{{title}}</h1>
    <!-- End: Header component -->

    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Books</a>
      <a routerLink="/books" routerLinkActive="active">Manage Books</a>
    </nav>
  `,
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  @Input() title: string;
}
