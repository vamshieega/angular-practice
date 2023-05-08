import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatComponent } from './concat/concat.component';
import { OperatorsComponent } from './operators/operators.component';
import { RouterModule, Routes } from '@angular/router';
import { MergeComponent } from './merge/merge.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';

const routes: Routes = [
  { path: '', component: OperatorsComponent },
  { path: 'concat', component: ConcatComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'forkjoin', component: ForkjoinComponent },
]


@NgModule({
  declarations: [
    ConcatComponent,
    OperatorsComponent,
    MergeComponent,
    ForkjoinComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OperatorsModule { }

