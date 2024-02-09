import { Routes } from '@angular/router';
import { BoardComponent } from './_modules/main/board/board.component';

export const routes: Routes = [
  {
    path: 'board',
    component: BoardComponent,
  },
  { path: '**', redirectTo: 'board' },
];
