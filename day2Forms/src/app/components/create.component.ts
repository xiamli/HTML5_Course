import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import {NgForm} from '@angular/forms';
import { EventEmitter } from 'events';
import {Task} from './Task';
import { fromEventPattern } from 'rxjs';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
//Injection
@ViewChild('form')
todoForm:NgForm;//reference form
@ViewChild('taskName')
taskName:ElementRef;//reference HTML element
task: Task[]=[];

@Output()
newTask = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  processForm(){
    console.log("ele ref",this.taskName);

  }

}
