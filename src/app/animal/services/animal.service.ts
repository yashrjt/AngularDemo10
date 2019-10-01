import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
//observer pattern
  constructor(private http:HttpClient) { }
  //callback function
  //--promise- returns data just once.can be resolved/rejected,promise cannot be cancelled
  //observable-- stream of data next,complete,error . observables are cancellable
  //cold observable/hot observables
  getAnimal(){
    console.log('get animal; called');
      return this.http.get('https://dog.ceo/api/breeds/list/').pipe(
        map(res=>{
        console.log("TCL: AnimalService -> getAnimal -> res", res['message'])
            return res['message'];
        }),
        catchError((err)=>{
        console.log("TCL: AnimalService -> getAnimal -> err", err)
          return err;
        })
      );
  }
}


// rxjs---reactive programming js


