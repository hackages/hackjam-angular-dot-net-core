import {AuthGuard} from './services/auth.guard';
import {BookResolver} from './services/book.resolver';
import {BookDetailComponent} from './components/book-detail/book-detail.component';
import {Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent,
    resolve: {
      book: BookResolver,
    }
  },
  {path: '**', redirectTo: 'dashboard'},
];
