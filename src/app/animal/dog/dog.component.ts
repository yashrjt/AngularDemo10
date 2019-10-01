import { Component, OnInit } from '@angular/core';
import {AnimalService} from '../services/animal.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  animal:Array<any>=[];
  constructor(private a:AnimalService) { }

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

}
