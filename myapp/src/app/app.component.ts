import { Component, OnInit } from '@angular/core';
import { DataService } from './app.services';
import { Entertainment } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myapp';

  dataList: Entertainment[] = [];

  trendingList: Entertainment[] = [];

  RecommendList: Entertainment[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.dataList = data;
      this.trendingList = this.dataList.filter(e=> e.isTrending);
      console.log("Dad:" + this.trendingList);
      this.RecommendList = this.dataList.filter(e=> !e.isTrending);
    });

    console.log(this.trendingList);
  }


}
