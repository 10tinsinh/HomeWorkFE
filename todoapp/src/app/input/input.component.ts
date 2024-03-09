import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  hideCircle: boolean = false;

  hidePlaceholderCircle() {
    this.hideCircle = true;
  }

  showPlaceholderCircle() {
    this.hideCircle = false;
  }
}
