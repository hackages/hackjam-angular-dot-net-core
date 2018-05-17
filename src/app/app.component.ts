import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'bs-bookstore',
  styleUrls: ['app.component.css'],
  template: `
    <bs-header [title]="title"></bs-header>
    <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Bookstore by Hackages';
}
