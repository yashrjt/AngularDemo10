import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/authentication/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn:any;

  constructor(private auth:LoginService) { }

  ngOnInit() {

    this.auth.loggedInObseravble.subscribe((loggedInUser)=>{
      if(loggedInUser){
          this.loggedIn=true;
      }
      else{
        this.loggedIn=false;
      }
    })
  }


  logout(){
    this.auth.logoutUser();
  }
}
