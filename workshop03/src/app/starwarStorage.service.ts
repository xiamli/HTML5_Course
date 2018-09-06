import { Injectable } from "@angular/core";
import Dexie from 'dexie';
import { SWCharacter} from './model';

@Injectable()
export class SWStorageSVC {

    private db: Dexie;

    constructor(){
        //create the database
        this.db=new Dexie('SW_DB');
        //define schema and object
        this.db.version(1).stores({
            sw_characters:'id,image,name,height,mass,hair_color,skin_color,eye_color,birth_year,gender,homeworld,films,species,vehicles,starships,created,edited,url'
        });
    }

    addCharacter(newCharacter: SWCharacter): Promise<string>{
        //promise
        return (this.db['sw_characters'].put(newCharacter));
    }

    //select character by id
    selCharById(inputId:any): Promise<SWCharacter[]> {
        return (this.db['sw_characters']
         .filter(add =>{
             return(inputId.test(add.id));
         })
         .toArray()
     )
    }


}