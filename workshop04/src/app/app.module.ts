import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SWStorageSVC } from './starwarStorage.service';
import { StarWarSVC } from './starwarSvc.service';
import { ApprouteModule } from './/approute.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ApprouteModule
  ],
  providers: [SWStorageSVC,StarWarSVC],
  bootstrap: [AppComponent]
})
export class AppModule { }
