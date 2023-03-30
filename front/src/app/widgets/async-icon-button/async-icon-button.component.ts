import { Component, Input } from '@angular/core';
import { faCircleNotch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-async-icon-button',
  templateUrl: './async-icon-button.component.html',
  styleUrls: ['./async-icon-button.component.scss'],
})
export class AsyncIconButtonComponent {
  @Input()
  icon = faTrashAlt;
  circleNotch = faCircleNotch;
  isRunning = false;
  @Input()
  label = 'à remplacer';
  @Input()
  observable: () => Observable<void> = () => of(undefined);

  doSomething() {
    of(undefined)
      .pipe(
        tap(() => {
          this.isRunning = true;
        }),
        switchMap(this.observable),
        tap(() => {
          this.isRunning = false;
        })
      )
      .subscribe();
  }
}
