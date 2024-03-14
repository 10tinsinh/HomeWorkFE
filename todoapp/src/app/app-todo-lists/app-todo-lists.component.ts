import { Component,NgModule } from '@angular/core';
import { ListToDo } from '../list-to-do.model';

@Component({
  selector: 'app-app-todo-lists',
  templateUrl: './app-todo-lists.component.html',
  styleUrls: ['./app-todo-lists.component.scss']
})
export class AppTodoListsComponent {
  listTodo : ListToDo[] = [];
  countItems : number = 0;
  
  ngOnInit():void{
    this.listTodo.push(new ListToDo('Cuong',0));
    this.listTodo.push(new ListToDo('Cuong 2',0));
    this.countItems = this.listTodo.length;
  }
}
