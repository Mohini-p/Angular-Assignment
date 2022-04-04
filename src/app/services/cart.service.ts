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

    this.arr.push({id : message.id,pname:message.pname,pdesc: message.pdesc,pimg :message.pimg,pprice:message.pprice,totalqty:message.pqty, quantity : qty});
    console.log(message);
  }
  //observable end
}


