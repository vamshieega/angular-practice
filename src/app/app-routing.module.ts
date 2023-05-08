import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'rxjs', pathMatch: 'full' },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs-module/rxjs.module').then(m => m.RxjsModule),
  },
  {
    path: 'subject',
    loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule)
  },
  {
    path: 'operators',
    loadChildren: () => import('./operators/operators.module').then(m => m.OperatorsModule)
  },
  { path: '**', redirectTo: 'rxjs' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
