import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, switchMap, throwError } from 'rxjs';
import { Article, NewArticle } from '../interfaces/article';
import { ArticleService } from './article.service';

export const url = 'http://localhost:3000/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private readonly http: HttpClient) {
    super();
    console.log('http article service starting...');
  }

  override refresh(): Observable<void> {
    return of(undefined).pipe(
      switchMap(() => this.http.get<Article[]>(url)),
      map((articles) => {
        this.articles$.next(articles);
      }),
      catchError(() => {
        return throwError(() => new Error('Erreur de râfraichissement'));
      })
    );
  }

  override add(newArticle: NewArticle): Observable<void> {
    return of(undefined).pipe(
      switchMap(() => this.http.post<void>(url, newArticle)),
      catchError(() => {
        return throwError(() => new Error("Erreur de l'ajout"));
      })
    );
  }

  override remove(ids: string[]): Observable<void> {
    return of(undefined).pipe(
      switchMap(() =>
        this.http.delete<void>(url, {
          body: ids,
          headers: {
            'Content-Type': 'application/json',
          },
        })
      ),
      catchError(() => {
        return throwError(() => new Error('Erreur de la suppression.'));
      })
    );
  }
}
