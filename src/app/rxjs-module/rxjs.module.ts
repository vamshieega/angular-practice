import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable/observable.component';
import { RouterModule, Routes } from '@angular/router';
import { HotandcoldComponent } from './hotandcold/hotandcold.component';

const route: Routes = [
  { path: 'observable', component: ObservableComponent },
  { path: 'hotandcold', component: HotandcoldComponent },
  { path: '**', redirectTo: 'hotandcold' }
]

@NgModule({
  declarations: [
    ObservableComponent,
    HotandcoldComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports: [
    HotandcoldComponent
  ]
})
export class RxjsModule { }
