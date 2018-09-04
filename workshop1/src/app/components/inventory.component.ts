import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LineItem } from '../model';
interface Fruit {
  img:string;
  label:string;
}
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  fruitList: Fruit[]= [
    {img:"assets/fruits/acorn_squash.png", label:"Acron Squash"},
    {img:"assets/fruits/apple.png", label:"Apple"},
    {img:"assets/fruits/bell_pepper.png", label:"Bell Pepper"},
    {img:"assets/fruits/broccoli.png", label:"Broccoli"},
    {img:"assets/fruits/corn.png",label:"Corn"}
  ]
  fruitImg="";
  fruitName="";

  @Output()
  newLineItem = new EventEmitter<LineItem>();

  constructor() { }

  ngOnInit() {}

  displayFruit(event:any){
    console.log(">>",event.target.value);
    this.fruitImg=this.fruitList[event.target.value].img;
    this.fruitName=this.fruitList[event.target.value].label;  
  }

  add(myInventory: NgForm){
    console.log("form: ",myInventory.value);
    const lineItem: LineItem ={
      label:this.fruitName,
      quantity:myInventory.value.quantity,
      imgurl:this.fruitImg
    };
    this.fruitName="";
    this.fruitImg="";
    myInventory.resetForm;
    this.newLineItem.next(lineItem);
  }
}
