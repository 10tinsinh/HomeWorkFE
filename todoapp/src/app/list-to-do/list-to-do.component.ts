import { Component, OnInit  } from '@angular/core';
import { Items } from './list-to-do.model';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.scss']
})

export class ListToDoComponent {
  items :Items[] = [];

  countItems : number = 0;
  ngOnInit(): void {
    // Thêm một phần tử mới vào mảng items khi component được khởi tạo
    this.items.push(new Items('One', true));
    this.items.push(new Items('Two', true));
    this.items.push(new Items('Three', true));
    this.countItems = this.items.length;
  }

 
}
