import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoapp';

  itemOutput = '';

  inputItem(item: string){
    this.itemOutput = item;
    console.log('parent:' + this.itemOutput);
    
  }
}
