import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-app-todo-input',
  templateUrl: './app-todo-input.component.html',
  styleUrls: ['./app-todo-input.component.scss']
})
export class AppTodoInputComponent {
  itemText : string = '';

  @Output() itemInput = new EventEmitter<string>();

  addItem(): void {
    this.itemInput.emit(this.itemText);
    this.itemText = '';
  }
}
