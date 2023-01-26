import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { increment, decrement } from '../store/counter.action';
import { counterSelector } from '../store/counter.selector';
import { CounterState } from '../store/counter.state';
import { CounterFacade } from '../store/counter.facade';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  
  counter$ : Observable<number>;

  constructor(private store: Store<CounterState>, private countFacade : CounterFacade) {
    this.counter$ = this.countFacade.counter$;
  }

  ngOnInit() {
    
  }

  increment() {
    this.countFacade.increment();
  }

  decrement() {
    this.countFacade.decrement();
  } 

}



