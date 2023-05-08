import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject, Subscriber } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-hotandcold',
  templateUrl: './hotandcold.component.html',
  styleUrls: ['./hotandcold.component.scss']
})
export class HotandcoldComponent implements OnInit {

  /**
   There are two types of observables: hot and cold. The main difference is that a cold observable 
   creates a data producer for each subscriber, whereas a hot observable creates a data producer first,
    and each subscriber gets the data from one producer, starting from the moment of subscription.

    simply :
    When the data is produced by the Observable itself, we call it a cold Observable. 
    When the data is produced outside the Observable, we call it a hot Observable.
   */
  constructor(private http: HttpClient) {
    let random = Math.random();
    const customObs = new Observable<number>((observer: Subscriber<number>) => {
      return observer.next(random);
    });

    customObs.subscribe((res) => {
      console.log('1', res)
    })

    customObs.subscribe((res) => {
      console.log('2', res);
    })

    //creating a subject
    const sub = new Subject<number>();

    sub.subscribe((res) => console.log('sub data 1', res));
    // sub.subscribe((res) => console.log('sub data 2', res));
    console.log("Test")
    sub.next(Math.random());
    // sub.next(Math.random());


    this.http.get('/assets/dummy-data.json').subscribe((res) => {
      console.log("http ", res);
    })
  }


  ngOnInit(): void {
  }

}
