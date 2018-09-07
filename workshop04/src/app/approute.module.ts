import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list.component';
import { AddCharacterComponent } from './components/add-character.component';

const ROUTES:Routes=[
 /* {path:'',component:},*/
 {path:'', component:PeopleListComponent},
 {path:'character', component:PeopleListComponent},
 {path:'add', component:AddCharacterComponent},
//Catch all - anything cannot match go to / means to to path ''
 { path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule],
  declarations: []
})
export class ApprouteModule { }
