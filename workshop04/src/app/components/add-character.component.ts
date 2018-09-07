import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarWarSVC } from '../starwarSvc.service';
import { SWStorageSVC } from '../starwarStorage.service';
import { SWCharacter } from '../model';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  searchTerm:number;
  searchResult:SWCharacter;

  constructor(private swSVC:StarWarSVC,private swStorageSv:SWStorageSVC,
    private router:Router,public snackBar: MatSnackBar ) { }
 //to directly access the form
 @ViewChild('myForm')
 form:NgForm;

  ngOnInit() {
  }

  processForm(){
    this.searchTerm=this.form.value.searchTerm;
    
    this.swStorageSv.findById(this.searchTerm)
    .then(
      (result)=>{//resolve
        this.router.navigate(['/']);
        console.log('found it: ',result);
        throw false;//throw to catch 
    },
    this.swSVC.searchCharactor.bind(this.swSVC)
    )
    .then(this.swStorageSv.addCharacter.bind(this.swStorageSv))
    .then(id=>{
      console.log("id: ",id);
      this.router.navigate(['/'],{queryParams:{message: `Saved ${id}`}});
    })
    .catch(
      err=>{
        if(err){
          return;
        }
        console.error('>>>>>ERROR: ',err)
        this.router.navigate(['/'],{queryParams:{message:`Error: ${err}`}});
  })
  this.form.resetForm();
}

goBack(){
  this.router.navigate(['/']);
}

openSnackBar(msg:string,status:string){
  this.snackBar.open(msg, status, {
    duration: 2000,
  });
}
}
