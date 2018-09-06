import { Component, OnInit} from '@angular/core';
import { Contact } from './model';
import {ContactService} from './address.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  //regular expression
  private tabs=[
  {label:'A-E', pattern: /^[a-e].*/i },
    {label:'F-J', pattern: /^[f-j].*/i },
    {label:'K-O', pattern: /^[k-o].*/i },
    {label:'P-T', pattern: /^[p-t].*/i },
    {label:'U-Z', pattern: /^[u-z].*/i },
  ]

  private contactList: Contact[]=[];
  currentTab: Number =0;


 //svc is injected into the component
  /* private addressService: ContactService;
   constructor(svc:ContactService){
    this.addressService=svc;
  }*/
  constructor(private addressSvc:ContactService){}

  ngOnInit(){
    this.addressSvc.selectContact(this.tabs[0].pattern)
    .then(addr =>{
      console.log('ngOnInit contacts:',addr)
    })
    .catch(err =>{
      console.log('err: ',err);
    })
  }

  processContact(contact:Contact){  
    console.log('Contact:',contact);
    this.addressSvc.addNewContact(contact)
    .then(result =>{
      //check if the new address is visible under the current
      //tab.if it is reload the tab
      console.log("contact saved: ",result);
    })
    .catch(err =>{
      console.log("err: ",err);
    })
  }

  loadAddress(event: MatTabChangeEvent){
    this.currentTab=event.index;
    const patt=this.tabs[event.index].pattern;
    this.addressSvc.selectContact(patt)
    .then(addr =>{
      console.log('loadAddress contacts:',addr)
      this.contactList=addr;
    })
    .catch(err =>{
      console.log('err: ',err);
    })
  }
}
