import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './component/home.component';
import { CatComponent } from './component/cat.component';
import { DogComponent } from './component/dog.component';

const ROUTES: Routes =[
  //hit error go home
  {path:'',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'cat',component:CatComponent},
  {path: 'dog',component:DogComponent},
  //wilcard this is the last route
  {path:'**',component:HomeComponent}
]

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule],
  declarations: []
})
export class ApprouteModule { }
