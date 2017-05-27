import { Component, OnInit, OnDestroy } from '@angular/core';

import 'rxjs/rx';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  s1: Subscription;
  s2: Subscription;

  constructor() { }

  ngOnInit() {
    var numbers = Observable.interval(1000)
      .map(
        (n: number) => {
          return n * 3;
        }
      );
    this.s1 = numbers.subscribe(
      (n: number) => {
        console.log(n);
      }
    );

    var myObservable: Observable<string> = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);

      setTimeout(() => {
        observer.next('second package');
      }, 4000);

      setTimeout(() => {
        // observer.next('2.5 package');
        observer.error('this does not work');
        // observer.complete();
      }, 5000);

      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });

    this.s2 = myObservable.subscribe(
      (data: string) => {
        console.log('Data received:', data);
      },
      (error: string) => {
        console.log('Error occurred:', error);
      },
      () => {
        console.log('Completed!');
      }
    );
  }

  ngOnDestroy() {
    this.s1.unsubscribe();
    this.s2.unsubscribe();
  }
}
