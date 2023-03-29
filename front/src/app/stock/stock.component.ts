import { Component } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faRotateRight, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  refreshIcon = faRotateRight;
  faPlus = faPlus;
  trashIcon = faTrashAlt;
}
