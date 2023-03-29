import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { delay, of, switchMap } from 'rxjs';
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

  constructor(readonly articleService: ArticleService) {}

  submit() {
    console.log('Submit form...');
    of(undefined)
      .pipe(
        delay(1000),
        switchMap(() => {
          const newArticle = this.f.value;
          return this.articleService.add(newArticle);
        })
      )
      .subscribe();
  }
}
