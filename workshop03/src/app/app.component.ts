import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarWarSVC } from './starwarSvc.service';
import { SWCharacter} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm:number;
  searchResult:SWCharacter;

  constructor(private swSVC:StarWarSVC){}

  //to directly access the form
  @ViewChild('myForm')
  form:NgForm;

  processForm(){
    this.searchTerm=this.form.value.searchTerm;
    this.swSVC.searchCharactor(this.searchTerm)
    .then(result =>{
      this.searchResult=result;
      console.log('result: ',this.searchResult);
    })
    this.form.resetForm();
  }

}
