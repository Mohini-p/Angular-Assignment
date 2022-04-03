import { BuiltinTypeName } from '@angular/compiler';
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
  total :number=0;
  constructor(private cartData: CartService) {
    
   }

  ngOnInit(): void {
      this.message = this.cartData.arr;
      console.log(this.cartData.arr);

      console.log(this.total +=this.message[4]);
  }

  // incr(num:number)
  // {
  //   console.log(num);
  //   return num+=1;
  // }

  // decr(num:number)
  // {
  //   console.log(num);
  //   return num-=1;
  // }


}


