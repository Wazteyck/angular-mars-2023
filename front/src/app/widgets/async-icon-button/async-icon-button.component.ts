import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCircleNotch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { catchError, finalize, Observable, of, switchMap, tap } from 'rxjs';

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

  @Output()
  actionError = new EventEmitter<Error>();

  @Output()
  actionStart = new EventEmitter<void>();

  doSomething() {
    of(undefined)
      .pipe(
        tap(() => {
          this.isRunning = true;
          this.actionStart.emit();
        }),
        switchMap(this.observable),
        catchError((err) => {
          console.log('err: ', err);
          this.actionError.emit(err instanceof Error ? err : new Error(err));
          return of(undefined);
        }),
        finalize(() => {
          this.isRunning = false;
        })
      )
      .subscribe();
  }
}
