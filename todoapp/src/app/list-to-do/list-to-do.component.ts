import { Component, Input, OnChanges, OnInit,SimpleChanges } from '@angular/core';
import { Items } from './list-to-do.model';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.scss']
})

export class ListToDoComponent  {
  items :Items[] = [];
  itemsEmpty :Items[] = [];


  @Input() set itemInputParent(value:string){
    console.log('child:'+ value);
    if(value !== '')
    {
      this.addItem(value);
    }
  }
  

  countItems : number = 0;
  ngOnInit(): void {
    
    this.countItems = this.items.length;
    if(this.countItems === 0)
    {
      this.itemsEmpty.push(new Items('Empty', true))
    }
    else{
      this.itemsEmpty = [];
    }

  }

  addItem(itemAdd:string):void{
    this.items.push(new Items(itemAdd, true));
    this.countItems = this.items.length;
    // this.itemInputParent = '';
  }
}
