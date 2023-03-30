import { Component, OnDestroy } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { delay, Observable, of, switchMap, tap } from 'rxjs';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnDestroy {
  errorMsg = '';
  faPlus = faPlus;
  refreshIcon = faRotateRight;
  selectedArticles = new Set<Article>();
  trashIcon = faTrashAlt;

  constructor(readonly articleService: ArticleService) {
    console.log('articleService: ', articleService);
    console.log('Stock component birth');
  }

  ngOnDestroy(): void {
    console.log('Stock component disappear');
  }

  refresh() {
    console.log('refreshing');
    return of(undefined).pipe(delay(2000), this.refreshAndClear.bind(this));
  }

  remove() {
    console.log('about to remove');
    return of(undefined).pipe(
      delay(2000),
      switchMap(() => {
        const ids = [...this.selectedArticles].map((x) => x.id);
        return this.articleService.remove(ids);
      }),
      this.refreshAndClear.bind(this)
    );
  }

  select(a: Article) {
    console.log('a: ', a);
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
    } else {
      this.selectedArticles.add(a);
    }
  }

  setErrorMsg(err: Error) {
    this.errorMsg = err.message;
  }

  private refreshAndClear(obs: Observable<void>): Observable<void> {
    return obs.pipe(
      switchMap(() => {
        return this.articleService.refresh();
      }),
      tap(() => {
        this.selectedArticles.clear();
      })
    );
  }
}
