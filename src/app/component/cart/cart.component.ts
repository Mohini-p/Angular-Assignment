import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
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
  docid :any;
  constructor(
    private cartData: CartService,
    private router : Router,
    private firestore : AngularFirestore,
    ) {}

  ngOnInit(): void {
      this.message = this.cartData.arr;
      console.log(this.message);

      this.message.forEach(e =>{
        this.total += e.quantity*e.pprice; 
      });
  }

  incr(id:string)
  {
    this.message.forEach(element => {
      if(element.id==id){
        element.quantity+=1;
        this.total += 1*element.pprice;
      }
    });

  }

  decr(id:string)
  {
    this.message.forEach(element => {
      if(element.id==id){
        if(element.quantity>0){
          element.quantity-=1;
          this.total -= 1*element.pprice;
        }}
    });
  }

  deleteProduct(id:string){
    this.message.forEach((element,index) => {
      if(element.id==id)
      {
        this.total -=element.quantity*element.pprice;
        this.message.splice(index,1);
        console.log("Data Deleted!!");
      }
    });
  }

  placeorder(){
    //Check's if the cart is empty or not
    if(this.message.length==0)
    {
      window.alert("Cart is Empty!!");
      this.router.navigate(['/home']);
    }else{
      //adding the data of cart into firestore
      this.message.forEach(element => {
       this.docid = element.id + Math.floor(Math.random()*10);
       this.firestore.collection('Orders').doc(this.docid).set(element);      
      });
      console.log(this.message);
      this.router.navigate(['/order']); 
    }
  }
}


