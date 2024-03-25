import { Component,Input, NgModule } from '@angular/core';
import { ListToDo } from '../list-to-do.model';

@Component({
  selector: 'app-app-todo-lists',
  templateUrl: './app-todo-lists.component.html',
  styleUrls: ['./app-todo-lists.component.scss']
})
export class AppTodoListsComponent {
  listTodo : ListToDo[] = [];
  isCheckAll : boolean = false;

  
  @Input() lists: ListToDo[] = [];
  @Input() countItems: number = 0;
  @Input() isDarkMode: boolean = false;

  
  ngOnInit():void{
    this.listTodo = this.lists;
    this.countItems = this.listTodo.length;
  }
}
