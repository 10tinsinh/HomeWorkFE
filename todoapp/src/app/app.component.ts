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
      const idTmp = this.generateId(this.listTodo)
      this.listTodo.push(new ListToDo(idTmp ,item, 0));
      this.countItem = this.listTodo.length;
    }
  }

  generateId(listTodo: ListToDo[]): number {
    // Logic để tạo một ID duy nhất ở đây, ví dụ:
    let maxId = 0;
    for (const todo of listTodo) {
      if (todo.id > maxId) {
        maxId = todo.id;
      }
    }
    return maxId + 1; // Trả về một ID lớn hơn maxId hiện tại
  }
}
