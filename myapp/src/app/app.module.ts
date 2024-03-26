import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InputComponent } from './input/input.component';
import { TrendingComponent } from './trending/trending.component';
import { RecommendedComponent } from './recommended/recommended.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputComponent,
    TrendingComponent,
    RecommendedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
