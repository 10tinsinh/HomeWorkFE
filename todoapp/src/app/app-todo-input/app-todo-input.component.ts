import { Component, EventEmitter, Output, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-app-todo-input',
  templateUrl: './app-todo-input.component.html',
  styleUrls: ['./app-todo-input.component.scss']
})
export class AppTodoInputComponent {
  itemText : string = '';
  isChecked : boolean = false;

  @Output() itemInput = new EventEmitter<string>();
  @Output() isCheckAll = new EventEmitter<boolean>();
  @Input() isDarkMode: boolean = false;
  

  addItem(): void {
    this.itemInput.emit(this.itemText);
    this.itemText = '';
  }

  checked(): void{
    this.isCheckAll.emit(this.isChecked);
  }
}
