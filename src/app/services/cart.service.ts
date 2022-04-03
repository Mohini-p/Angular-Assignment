import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  arr:any[] = [];

  //created observable 
  //observable start
  private productData = new Subject<string>();
  pData$ = this.productData.asObservable();
  constructor() { }

  sendProductData(message:any,qty:number){
    this.productData.next(message);

    this.arr.push({message,quantity : qty});
    console.log(this.arr);
  }
  //observable end
}


