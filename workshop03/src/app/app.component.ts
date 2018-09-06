import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarWarSVC } from './starwarSvc.service';
import { SWCharacter } from './model';
import { SWStorageSVC } from './starwarStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  searchTerm:number;
  searchResult:SWCharacter;

  constructor(private swSVC:StarWarSVC, private swStorageSv:SWStorageSVC){}
 
  //to directly access the form
  @ViewChild('myForm')
  form:NgForm;

  processForm(){
    this.searchTerm=this.form.value.searchTerm;
    this.swSVC.searchCharactor(this.searchTerm)
    .then(result =>{
      this.searchResult=result;
      console.log('result: ',this.searchResult);
      this.swStorageSv.addCharacter(this.searchResult)
      .then(result =>{
        console.log("New character added: ",result);
      })
      .catch(err =>{
        console.log("Added Character ERROR: ",err);
      })
    })
    this.form.resetForm();
  }

}
