import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const ROUTES:Routes=[
  {path:'',component:},
  {path:'',component:},
  {path:'',component:},
  {path:'',component:},
  {path:'',component:}
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule],
  declarations: []
})
export class ApprouteModule { }
