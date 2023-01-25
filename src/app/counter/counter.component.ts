import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { increment, decrement } from '../store/counter.action';
import { counterSelector } from '../store/counter.selector';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count: number = 0;

  constructor(private store: Store<CounterState>) {
  }

  ngOnInit() {
    // this.count$ = this.store.select(store => store.count);
    this.store.select(CounterState => CounterState.count).subscribe(count => {
      this.count = count;
    });
    
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

}



