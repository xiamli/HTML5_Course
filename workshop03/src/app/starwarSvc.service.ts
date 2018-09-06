import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import { SWCharacter} from './model';

//make this into a service
//inject http into the service
//write a search method
const URL='https://swapi.co/api/people/';
const imgURL='https://starwars-visualguide.com/assets/img/characters/';
const jpg='.jpg';
@Injectable()
export class StarWarSVC{

    //inject httpclient service into ciphyservice
    constructor(private http:HttpClient){}

    searchCharactor(id:number): Promise<SWCharacter>{
        //string interpolation
        //this.http.get(`https://swapi.co/api/people/${id}`)<-- use` instead of '
        console.log(URL+id);
        console.log(`https://swapi.co/api/people/${id}`);
       return(
        this.http.get<SWCharacter>(URL+id)
        .toPromise()
        //enrich the data then return
        .then(result =>{
            result.id=id;
            result.image=imgURL+id+jpg;
            return result;
        })
       );
    }

}