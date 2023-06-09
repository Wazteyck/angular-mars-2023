import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Article, NewArticle } from '../interfaces/article';

const generateId = () => {
  return Date.now() + '_' + Math.round(Math.random() * 1e12);
};

export let articles: Article[] = [
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
  articles$ = new BehaviorSubject<undefined | Article[]>(undefined);

  constructor() {
    setTimeout(() => {
      this.articles$.next(this.articles$.value);
    }, 2000);
  }

  add(newArticle: NewArticle): Observable<void> {
    const article = { ...newArticle, id: generateId() };
    articles.push(article);
    return of(undefined);
  }

  refresh(): Observable<void> {
    console.log('about to refresh');

    this.articles$.next(articles);
    return of(void 0);
  }

  remove(ids: string[]): Observable<void> {
    articles = articles.filter((a) => !ids.includes(a.id));
    return of(undefined);
  }
}
