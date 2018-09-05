import { Injectable } from "@angular/core";
import Dexie from 'dexie';
import { Contact } from "./model";
import { promise } from "protractor";

@Injectable()
export class ContactService {
    private db: Dexie;

    constructor(){
        //create the database
        this.db=new Dexie('addBook');
        //define schema and object
        this.db.version(1).stores({
            contacts:'email, name, address, phone'
        });

    }
    //class
    addNewContact(person: Contact): Promise<string>{
        //promise
        return (this.db['contacts'].put(person));
    }

    //select all order by name filter by pattern
    selectContact(pattern:any): Promise<Contact[]> {
       return ( this.db['contacts']
        .orderBy('name')
        .filter(add =>{
            pattern.test(add.name);
        })
        .toArray()
    )
}
}