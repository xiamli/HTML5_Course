import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GiphyService } from './giphy.service';
import {Giphy} from './model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  giphy:Giphy[]=[];
  searchTerm:string;
  constructor(private giphysvc:GiphyService){}

  submitTerm(form:NgForm){
    console.log("submit a new term",form.value.searchTerm);
    this.searchTerm=form.value.searchTerm;
    this.giphysvc.search(form.value.searchTerm)
    .then((result:Giphy[])=>{
      this.giphy=result;
      console.log('giphy: ',this.giphy)
    })
    .catch(err =>{
      console.error('Error: ',err);
    })
    form.resetForm();
  }
}
