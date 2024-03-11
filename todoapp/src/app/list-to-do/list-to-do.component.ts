import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Items } from './list-to-do.model';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.scss'],
})
export class ListToDoComponent {
  items: Items[] = [];
  itemsEmpty: Items[] = [];
  countItems: number = 0;

  @Input() listTodo: string[] = [];
}
