import { Component, Input, Renderer2 } from '@angular/core';
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
  isDarkMode : boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    
  }

  darkMode(){
    this.isDarkMode = true;
    this.renderer.setStyle(document.body, 'background-color', 'black');
  }

  lightMode(){
    this.isDarkMode = false;
    this.renderer.setStyle(document.body, 'background-color', '#ccc');
  }

  inputItem(item: string){
    if(item !== ''){
      const idTmp = this.generateId(this.listTodo)
      this.listTodo.push(new ListToDo(idTmp ,item, 0));
      this.countItem = this.listTodo.length;
    }
  }

  isCheckAll(isChecked : boolean){
    if(isChecked){
      this.listTodo.forEach(e=>
        e.isChecked = true
        
      );
    }
    else{
      this.listTodo.forEach(e=>e.isChecked = false);
    }

    console.log(this.listTodo);
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
