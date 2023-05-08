import { Component, OnInit } from '@angular/core';
import { Observable, concat, of } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {


  /**
   The concat operator is used when you need to combine multiple observables, 
   but you want their emissions to be in a specific order, one after the other.
   */
  source1$ = of(1, 2, 3, 4);
  source2$ = of('a', 'b', 'c', 'd');

  constructor() {

    // Do concat
    console.log("1st example")
    // It will print the  sequence  of source1$ and source2$ observables
    this.callConcat();

    // Now, lets not complete the first observable and see the action, It wont execute the concat
    //Because source1$ was not completed

    //here below, created a observable and created 1 and 2 values in it
    this.source1$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
    })
    console.log("2nd example")
    this.callConcat();

    // Now, We will keep the settimeout in source1$ to completed at certain time, hence we can concat 
    // the both and it will execute
    this.source1$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      setTimeout(() => {
        observer.complete()
      }, 1000);
    })
    console.log("3rd example")
    this.callConcat();
  }

  /**
   
  Summary : It will subscribe to the first observable, it will print all the values until it is complete 
  and it goes to the source2$ observable and it again subscribe and emit all the values, this is concat 
  operator 
  */

  ngOnInit(): void {


  }

  callConcat() {
    concat(this.source1$, this.source2$).subscribe((res) => {
      console.log(res);
    })
  }

}
