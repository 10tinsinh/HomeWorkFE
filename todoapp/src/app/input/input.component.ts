import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  hideCircle: boolean = false;

  @Output() itemInput = new EventEmitter<string>();

  itemText: string = '';

  hidePlaceholderCircle() {
    this.hideCircle = true;
  }

  showPlaceholderCircle() {
    this.hideCircle = false;
  }

  addItem(): void {
    this.itemInput.emit(this.itemText);
    this.itemText = '';
  }
}
