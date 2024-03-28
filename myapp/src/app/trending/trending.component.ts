import { Component, Input } from '@angular/core';
import { Entertainment } from '../app.model';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent {
  trendings: Entertainment[] = [];

  @Input() listData: Entertainment[] = [];

  ngOnInit():void{
    this.trendings = this.listData;
    console.log("child:" + this.listData);
  }
}
