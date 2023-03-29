import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../interfaces/article';

const articles: Article[] = [
  {
    id: 'a1',
    name: 'Tournevis',
    price: 3.99,
    qty: 100,
  },
  {
    id: 'a2',
    name: 'Pelle',
    price: 5.99,
    qty: 10,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>(articles);

  constructor() {
    setTimeout(() => {
      this.articles$.value.push({
        id: '5a',
        name: 'Marteau',
        price: 10,
        qty: 5,
      });
      this.articles$.next(this.articles$.value);
    }, 2000);
  }
}
