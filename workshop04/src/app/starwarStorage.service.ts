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

    addCharacter(newCharacter: SWCharacter): Promise<number>{
        //promise
        return (this.db['sw_characters'].put(newCharacter));
    }

    selectAllCharacter():Promise<SWCharacter[]>{
        return(
            this.db['sw_characters'].orderBy('name')
            .toArray()
        );
    }

    //select character by id
    findById(inputId:number): Promise<SWCharacter> {
        const p = new Promise<SWCharacter>((resolve,reject)=>{
            this.db['sw_characters'].where('id').equals(inputId)
            .toArray()
            .then((result: SWCharacter[]) =>{
                if(result.length>0){
                    resolve(result[0]);//return id
                }else{
                    reject(inputId);
                }
            })
        });
        return (p);
    }

    findByName(nameIpt:string): Promise<SWCharacter[]> {
        const p = new Promise<SWCharacter[]>((resolve,reject)=>{
            this.db['sw_characters'].where('name').equals(nameIpt)
            .toArray()
            .then((result: SWCharacter[]) =>{
                if(result.length>0){
                    resolve(result);//return name
                }else{
                    reject(nameIpt);
                }
            })
        });
        return (p);
    }


}