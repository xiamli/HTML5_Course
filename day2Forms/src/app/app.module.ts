import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create.component';
import { TaskListComponent } from './components/task-list.component';
import {MaterialModule} from './material.module';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    MatMomentDateModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
