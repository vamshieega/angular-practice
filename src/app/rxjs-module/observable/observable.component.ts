import { Component, OnInit } from '@angular/core';
import { from, fromEvent, Subject } from 'rxjs';
import { filter, tap, map } from 'rxjs/operators'
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() {
    console.log("1")
  }

  ngOnInit(): void {

    console.log("2")
    /*
    // form is the observable
    const source = from([1, 2, 3, 4])
    // observers are going to subscribe to the source
    source.subscribe(data => {
      console.log(data)
    })
    */

    //using events
    // const source = fromEvent(document, 'click')
    // source.subscribe((res) => {
    //   console.log(res)
    // })

    //Observables : 
    //Here we have created 2 observables 
    //1. To create observable we have used document click event and then we are going to fire our own observable
    // In that we are subscribing to the value passed by click event value
    //in source also we are using the observable and getting info as observer in the form of subscribe
    // const source = new Subject<string>();
    // let count = 0;
    // fromEvent(document, 'click').subscribe(() => {
    //   source.next('Hello' + (count++));
    // })
    // source.subscribe(data => {
    //   console.log(data)
    // })

    fromEvent<MouseEvent>(document, 'click')
      .pipe(
        tap(data => {
          // console.log('Before Filtering', data)
        }),
        filter(x => x.clientX > 100 && x.clientY > 100),
        map(data => `x : ${data.clientX}, Y : ${data.clientY}`)
      )
      .subscribe((res) => {
        console.log(res)
        console.log(res)
      })
  }

}
