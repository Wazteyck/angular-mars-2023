import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faFan, faPlus } from '@fortawesome/free-solid-svg-icons';
import { delay, of, switchMap, tap } from 'rxjs';
import { NewArticle } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  f = new FormGroup({
    name: new FormControl('?', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
    ]),
    price: new FormControl(0, Validators.required),
    qty: new FormControl(0, Validators.required),
  });
  faPlus = faPlus;
  faFan = faFan;
  isSubmitting = false;

  constructor(
    readonly articleService: ArticleService,
    readonly router: Router,
    readonly route: ActivatedRoute
  ) {}

  submit() {
    console.log('Submit form...');
    of(undefined)
      .pipe(
        tap(() => {
          this.isSubmitting = true;
        }),
        delay(1000),
        switchMap(() => {
          const newArticle = this.f.value as NewArticle;
          return this.articleService.add(newArticle);
        }),
        switchMap(() => this.articleService.refresh()),
        switchMap(() => {
          return this.router.navigate(['..'], { relativeTo: this.route });
        }),
        tap(() => {
          this.isSubmitting = false;
        })
      )
      .subscribe();
  }
}
