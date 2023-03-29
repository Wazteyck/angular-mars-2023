import { Component, OnDestroy } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faRotateRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnDestroy {
  faPlus = faPlus;
  refreshIcon = faRotateRight;
  trashIcon = faTrashAlt;

  constructor(readonly articleService: ArticleService) {
    console.log('articleService: ', articleService);
    console.log('Stock component birth');
  }

  ngOnDestroy(): void {
    console.log('Stock component disappear');
  }
}
