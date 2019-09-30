import { Component, OnInit } from '@angular/core';
export interface Employee{
  employeeName:string;
  age:number|null;
  city?:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title:string = 'AngularBatchTen';
  z:boolean=true;
  employee:Employee;
  city='orlando';

  todayDate=new Date();
  showText:boolean=true;
  empArray:Array<Employee>=[
    {
      'employeeName':'John',
      'age':30,
      'city':'chicago'
    },
    {
      'employeeName':'Albert',
      'age':40
    },
    {
      'employeeName':'Gerrit',
      'age':null,
      'city':'san jose'
    },
    {
      'employeeName':'John',
      'age':30,
      'city':'chicago'
    },
    {
      'employeeName':'Albert',
      'age':40
    },
    {
      'employeeName':'Gerrit',
      'age':null,
      'city':'san jose'
    }
  ];


  trainee={
      fName:'john',
      lName:'alex'
    }
  
  strArray:Array<string>=['chicago','california'];
  xyz:any;
  name:string='Albert';

 addsum(a,b):number{
   return a+b;
 }

 onSubmit(data){
  console.log(data);
  this.showText=!this.showText;
 }

 logEmployee($event){
 console.log("TCL: AppComponent -> logEmployee -> $event", $event)
}

}
