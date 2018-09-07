import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './/material.module';
import { StarWarSVC } from './starwarSvc.service';
import { SWStorageSVC } from './starwarStorage.service';
import { ApprouteModule } from './approute.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ApprouteModule,
    MaterialModule
  ],
  providers: [StarWarSVC,SWStorageSVC],
  bootstrap: [AppComponent]
})
export class AppModule { }
