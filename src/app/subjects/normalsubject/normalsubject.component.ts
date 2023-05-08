import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs'
@Component({
  selector: 'app-normalsubject',
  templateUrl: './normalsubject.component.html',
  styleUrls: ['./normalsubject.component.scss']
})
export class NormalsubjectComponent implements OnInit {

  subject = new Subject();
  firstSubscriptionString = '';
  secondSubscriptionString = '';

  constructor() {
    this.subject.next('1');
    this.subject.next('2');

    this.subject.subscribe(value => {
      console.log(`Subscription 1: ${value}`);
      this.firstSubscriptionString += `${value}; `;
    });

    this.subject.next('3');
    this.subject.next('4');

    this.subject.subscribe(value => {
      console.log(`Subscription 2: ${value}`);
      this.secondSubscriptionString += `${value}; `;
    });

    this.subject.next('5');
    this.subject.next('6');
  }
  ngOnInit(): void {
  }

}
