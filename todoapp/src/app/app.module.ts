import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppTodoInputComponent } from './app-todo-input/app-todo-input.component';
import { AppTodoListsComponent } from './app-todo-lists/app-todo-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTodoInputComponent,
    AppTodoListsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
