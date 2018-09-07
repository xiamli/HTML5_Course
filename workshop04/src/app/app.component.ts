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
    
    this.swStorageSv.findById(this.searchTerm)
    .then(
      (result)=>{
      console.log('found it: ',result);
    },
    this.swSVC.searchCharactor.bind(this.swSVC)
    )
    .then(this.swStorageSv.addCharacter.bind(this.swStorageSv))
    .catch(
      (err)=>{
        console.log('Not Found: ',err);  
  })
  this.form.resetForm();
}

 
}
