import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { RouterModule, Routes } from '@angular/router';
import { ReplaysubjectComponent } from './replaysubject/replaysubject.component';
import { AsyncsubjectComponent } from './asyncsubject/asyncsubject.component';
import { NormalsubjectComponent } from './normalsubject/normalsubject.component';


const route: Routes = [
  { path: '', redirectTo: 'behaviour', pathMatch: 'full' },

  { path: 'behaviour', component: BehaviourSubjectComponent },
  { path: 'replay', component: ReplaysubjectComponent },
  { path: 'async', component: AsyncsubjectComponent },
  { path: 'normalsubject', component: NormalsubjectComponent },
]

@NgModule({
  declarations: [
    BehaviourSubjectComponent,
    ReplaysubjectComponent,
    AsyncsubjectComponent,
    NormalsubjectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports: [
    BehaviourSubjectComponent
  ]
})
export class SubjectsModule { }
