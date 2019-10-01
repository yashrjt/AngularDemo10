import { Component, OnInit, Input, OnChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import {AnimalService} from '../services/animal.service';

@Component({
  selector: 'app-animal-one',
  templateUrl: './animal-one.component.html',
  styleUrls: ['./animal-one.component.css']
})
export class AnimalOneComponent implements OnInit ,OnChanges,OnDestroy{

  @Input() emp:Array<any>;

  @Output() onNotify=new EventEmitter();

  animal:Array<any>=[];
  constructor(private a:AnimalService) { }

  ngOnChanges(){
    console.log("TCL: AnimalOneComponent -> emp", this.emp)
  }

  ngOnInit() {
  console.log('comp init');

  this.a.getAnimal().subscribe((res)=>{
   for(var r in res){
   this.animal.push(r); 
   }

  console.log(Object.keys(res));
  console.log(Object.values(res));
  console.log(Object.entries(res)); 
   
  },
    (err)=>{
    console.log("TCL: AnimalOneComponent -> ngOnInit -> err", err)
     });
  }

  notifyParent($event){
  //console.log("TCL: AnimalOneComponent -> notifyParent -> $event", $event.target.innerText)
    this.onNotify.emit($event.target.innerText)
  }



  ngOnDestroy(){
    console.log('comp destroyed');
  }
 

}
