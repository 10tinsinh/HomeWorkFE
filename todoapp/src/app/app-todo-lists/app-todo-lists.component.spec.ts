import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTodoListsComponent } from './app-todo-lists.component';

describe('AppTodoListsComponent', () => {
  let component: AppTodoListsComponent;
  let fixture: ComponentFixture<AppTodoListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTodoListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTodoListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
