import { Component, Input } from '@angular/core';
import { ListToDo } from './list-to-do.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listTodo : ListToDo[] = [];
  item : string = '';
  countItem : number = 0;

  inputItem(item: string){
    if(item !== ''){
      this.listTodo.push(new ListToDo(item, 0));
      this.countItem = this.listTodo.length;
    }
  }
}
