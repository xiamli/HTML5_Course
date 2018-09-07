import { Component, OnInit } from '@angular/core';
import { SWStorageSVC } from '../starwarStorage.service';
import { SWCharacter } from '../model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})

export class PeopleListComponent implements OnInit {

  private allCharacter: SWCharacter[]=[];
  constructor(private swDBSvc:SWStorageSVC,private router:Router) {}

  ngOnInit() {
    this.swDBSvc.selectAllCharacter()
    .then(result=>{
      this.allCharacter=result;
    })
    .catch(err=>{
      console.log("ERROR: ",err);
    })
  }
  
  addPeople(){
    this.router.navigate(['/add']);
    console.log("Go ao add people");
  }

}
