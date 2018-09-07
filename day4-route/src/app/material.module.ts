import {NgModule} from "@angular/core";
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const MODULE=[
  FlexLayoutModule,MatToolbarModule,MatFormFieldModule,MatButtonModule,MatIconModule,MatInputModule
  ,MatTabsModule,MatListModule,MatSnackBarModule
];

@NgModule({
  imports:MODULE,
  exports:MODULE
})

export class MaterialModule { }
