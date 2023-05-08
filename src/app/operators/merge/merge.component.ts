import { Component, OnInit } from '@angular/core';
import { Observable, interval, merge, of } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {


  /**
   It will subscribe to all the observables and it will start emitting the value,It wont wait for the
   observable even if there is an sequence

   --> If it found error in the middle of the observable, it stops executing
   */
  constructor() { }
  source1$ = new Observable((observer) => {
    setTimeout(() => {
      observer.next(1)
      observer.next(2)
    }, 100);
  })
  source2$ = of('a', 'b');


  ngOnInit(): void {

    console.log("1st call")
    this.callMerge()
  }


  callMerge() {
    merge(this.source1$, this.source2$).subscribe((res) => {
      console.log(res)
    })
  }


  checkError() {
    this.source1$ = new Observable((observer) => {
      observer.next(1);
      observer.error();
    })
    this.callMerge();
  }
}
