import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }

  
  //subjects are both obseravbles and observers
  loggedInSubject:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  loggedInObseravble=this.loggedInSubject.asObservable();

  loginUser(loginCredentails){
    const token='jhsgdufygsdku76546543sdfdsfaf576456asdfsdf';

    localStorage.setItem('token',token);
    this.loggedInSubject.next(true);

    this.router.navigate(['/']);

  }


  logoutUser(){
    localStorage.removeItem('token');
    this.loggedInSubject.next(false);
    this.router.navigate(['/login']);
  }
}
