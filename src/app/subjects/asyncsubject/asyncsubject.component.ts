import { Component, OnInit } from '@angular/core';

import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-asyncsubject',
  templateUrl: './asyncsubject.component.html',
  styleUrls: ['./asyncsubject.component.scss']
})
export class AsyncsubjectComponent implements OnInit {

  constructor() { }

  subject$ = new AsyncSubject();

  ngOnInit() {
    this.subject$.next("1");
    this.subject$.next("2");

    this.subject$.subscribe(
      val => console.log("Sub1 " + val),
      err => console.error("Sub1 " + err),
      () => console.log("Sub1 Complete")
    );

    this.subject$.next("3");
    this.subject$.next("4");

    this.subject$.subscribe(val => {
      console.log("sub2 " + val);
    });

    this.subject$.next("5");
    this.subject$.complete();

    this.subject$.error("err");

    this.subject$.next("6");

    this.subject$.subscribe(
      val => console.log("Sub3 " + val),
      err => console.error("sub3 " + err),
      () => console.log("Sub3 Complete")
    );
  }

}
