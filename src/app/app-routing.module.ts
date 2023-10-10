import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'task-list',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/task-list/task-list.module').then( m => m.TaskListPageModule)
  },
  {
    path: 'task-detail/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/task-detail/task-detail.module').then( m => m.TaskDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
