import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.scss']
})
export class BehaviourSubjectComponent implements OnInit {

  constructor() {

  }
  subject$ = new BehaviorSubject("0");

  ngOnInit(): void {

    this.subject$.subscribe(val => {
      console.log("Sub 1 " + val);
    }, err => {
      console.log(err)
    }
    );

    this.subject$.next("1");
    this.subject$.next("2");

    this.subject$.subscribe(val => {
      console.log("sub 2 " + val);
    });

    this.subject$.next("3");
    this.subject$.complete();
  }
}
