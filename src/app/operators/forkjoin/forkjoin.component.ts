import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss'],
})
export class ForkjoinComponent implements OnInit {
  /**
   Fork Join : It will give the last value of each observable in the same order

   -> If it has empty, it wont execute the other observable, because it needs atleast one value
   -> If it wont complete, It wont Execute other observable
   -> If it has error, It throws the error, It wont print the value
   */
  constructor() { }
  source1$ = of(1, 2, 3, 5);
  source2$ = of('a', 'b', 'c', 'd');
  ngOnInit(): void {
    console.log("1st call")
    this.callForkJoin()

    this.source1$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
    })

    console.log("2nd call")
    this.callForkJoin()


    this.source2$ = new Observable((observer) => {
      observer.next('ee');
      observer.error();
    })

    console.log("3rd call")
    this.callForkJoin()
  }

  callForkJoin() {
    forkJoin([this.source1$, this.source2$]).subscribe((res) => {
      console.log(res)
    })
  }
}
