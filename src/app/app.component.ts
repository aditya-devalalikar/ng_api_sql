import { Component } from '@angular/core';
import { DisplayMessage, MessageType } from './user/user/store/user.state';
import { UserFacade } from './user/user/store/user.facade';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng_api_sql';
  constructor(private userFacade: UserFacade,
    private _snackBar: MatSnackBar) {
      this.userFacade.diplayMessage$.subscribe((item: DisplayMessage) => {
      if (item.type != MessageType.DEFAULT) {
        this._snackBar.open(item.message, item.type.toString(), {
          duration: 6000
        });
      }
    });
  }
}
