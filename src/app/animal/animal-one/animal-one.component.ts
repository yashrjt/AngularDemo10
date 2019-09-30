import { Component, OnInit, Input, OnChanges, OnDestroy, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-animal-one',
  templateUrl: './animal-one.component.html',
  styleUrls: ['./animal-one.component.css']
})
export class AnimalOneComponent implements OnInit ,OnChanges,OnDestroy{

  @Input() emp:Array<any>;

  @Output() onNotify=new EventEmitter();
  constructor() { }

  ngOnChanges(){
    console.log("TCL: AnimalOneComponent -> emp", this.emp)
  }

  ngOnInit() {
  console.log('comp init');
  }

  notifyParent($event){
  //console.log("TCL: AnimalOneComponent -> notifyParent -> $event", $event.target.innerText)
    this.onNotify.emit($event.target.innerText)
  }



  ngOnDestroy(){
    console.log('comp destroyed');
  }
 

}
