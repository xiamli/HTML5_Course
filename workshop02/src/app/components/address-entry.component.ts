import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../model';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-address-entry',
  templateUrl: './address-entry.component.html',
  styleUrls: ['./address-entry.component.css']
})
export class AddressEntryComponent implements OnInit {

  @Output()
  newAddress = new EventEmitter<Contact>();
  constructor(public snackBar: MatSnackBar) {}
  ngOnInit() {
  }

  processForm(myContact: NgForm){
    console.log("processForm",myContact.value);
    //form name need to be exactly same as the model
    //if not same will have runtime error
    //Cast form value to model 
    this.newAddress.next(<Contact>myContact.value);
    myContact.resetForm();
  }
 openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
