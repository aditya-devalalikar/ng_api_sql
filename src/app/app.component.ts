import { Component } from '@angular/core';
import { DisplayMessage, MessageType } from './store/counter.state';
import { CounterFacade } from './store/counter.facade';
// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng_api_sql';
  // constructor(private countfacade: CounterFacade,
  //   private _snackBar: MatSnackBar) {
    
  //     this.countfacade.diplayMessage$.subscribe((item: DisplayMessage) => {
  //     if (item.type != MessageType.DEFAULT) {
  //       this._snackBar.open(item.message, item.type.toString(), {
  //         duration: 3000
  //       });
  //     }
  //   });
  // }
}
