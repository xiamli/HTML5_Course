import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SWCharacter } from '../model';
import { SWStorageSVC } from '../starwarStorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-char',
  templateUrl: './display-char.component.html',
  styleUrls: ['./display-char.component.css']
})
export class DisplayCharComponent implements OnInit {
  selectedCharId:number;
  selectedChar:SWCharacter;
  canshare:boolean;
  constructor(private currRoute:ActivatedRoute,private swdbSvc:SWStorageSVC,
    private router:Router) { }

    ngOnInit() {
    this.canshare=!!navigator['share'];
    this.selectedCharId=parseInt(this.currRoute.snapshot.params.cId);
      console.log("xm Character ID:",this.selectedCharId);

      this.swdbSvc.findById(this.selectedCharId)
      .then(result=>{
        this.selectedChar=result
        console.log("selected Char",this.selectedChar);
      })
      .catch(err=>{
        console.log("ERROR: ",err);
      })
    }

    share(){
      if(this.canshare){
        navigator['share']({
          title:`Star War`,
          txt:`Sharing ${this.selectedChar.name} with the world`
        })
      }
      else{
        console.log("Sharing is not available");
      }
    }

    goBack(){
      this.router.navigate(['/']);
    }
}
