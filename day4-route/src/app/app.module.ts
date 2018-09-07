import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApprouteModule } from './approute.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home.component';
import { CatComponent } from './component/cat.component';
import { DogComponent } from './component/dog.component';
import { MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    ApprouteModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
