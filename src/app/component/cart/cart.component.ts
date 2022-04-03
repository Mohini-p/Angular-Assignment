import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  message:any[] = [];
  arr :any;
  constructor(private cartData: CartService) {
    
   }

  ngOnInit(): void {
    this.message = this.cartData.arr;
    console.log(this.cartData.arr);
  //  this.arr =
  //  this.cartData.pData$
  //   .subscribe(
  //     (message:any) =>{
  //       if(message){
  //         //converting Object into Array 
  //         console.log('cart data :\n'+message);
  //       }else if(!message){
  //         console.log('NO DATA');
  //       }
  //     }
  //   );
  
  }

  incr()
  {
    console.log(this.message[5]);
  }


}


