import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


const MODULES =[
  MatToolbarModule,MatButtonModule,MatInputModule
]
@NgModule({
  imports: MODULES,
  exports:MODULES
  declarations: []
})
export class MaterialModule { }
