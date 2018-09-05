import {NgModule} from "@angular/core";
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';


const MODULE=[
    FlexLayoutModule,MatToolbarModule,MatFormFieldModule,MatButtonModule,MatIconModule,MatInputModule
    ,MatTabsModule
];

@NgModule({
    imports:MODULE,
    exports:MODULE
})
export class MaterialModule{

}