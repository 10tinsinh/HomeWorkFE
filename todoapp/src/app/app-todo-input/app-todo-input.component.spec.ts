import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTodoInputComponent } from './app-todo-input.component';

describe('AppTodoInputComponent', () => {
  let component: AppTodoInputComponent;
  let fixture: ComponentFixture<AppTodoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTodoInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTodoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
