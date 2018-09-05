import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LineItem } from '../model';
interface Fruit {
  image:string;
  label:string;
}
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  fruitList: Fruit[]= [
    {image:"assets/fruits/acorn_squash.png", label:"Acron Squash"},
    {image:"assets/fruits/apple.png", label:"Apple"},
    {image:"assets/fruits/bell_pepper.png", label:"Bell Pepper"},
    {image:"assets/fruits/broccoli.png", label:"Broccoli"},
    {image:"assets/fruits/corn.png",label:"Corn"}
  ]

  fruitImg="";
  fruitName="";
  anotherCart: LineItem[]=[];

  @Output()
  newLineItem = new EventEmitter<LineItem>();

  constructor() { }

  ngOnInit() {}

  displayFruit(event){
    console.log(" >>", event.target.value);
    this.fruitImg=this.fruitList[event.target.value].image;
    this.fruitName=this.fruitList[event.target.value].label;  
  }

  add(myInventory: NgForm){
    console.log("form: ",myInventory.value);
    const lineItem: LineItem ={
      label:this.fruitName,
      quantity:myInventory.value.quantity
    };
    this.anotherCart.push(lineItem);
    this.fruitName="";
    this.fruitImg="";
    myInventory.resetForm();
    this.newLineItem.next(lineItem);
  }
}
