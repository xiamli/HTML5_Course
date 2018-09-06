import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import {Giphy} from './model'
@Injectable()
export class GiphyService{

    readonly API_KEY="9WB4Ir4YK1wWGlNKZn2GogrzMjvW7oyC";

 
    //inject httpclient service into ciphyservice
    constructor(private http:HttpClient){}

        search(searchTerm: string, limit =10,offset=0):Promise<Giphy[]>{
           //construct query parameter
            const params= new HttpParams()
            .set('api_key',this.API_KEY)
            .set('q',searchTerm)
            .set('limit',limit+'')
            .set('offset',offset+'');

         return(
             this.http.get<Giphy[]>('https://api.giphy.com/v1/stickers/search',{params:params})
           .toPromise()
           .then((result:any) =>{
               const g:Giphy[]=[];
               const data = result.data;
               for(let d of data){
                   g.push({
                       name:d.name,
                       title:d.title,
                       imgURL:d.images.fixed_width.url,
                       dateTime:d.import_datetime
                   })
               }
               return(g);

           })
        );
    }

}