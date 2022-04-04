import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$ = this.authService.currentUser$;
  product : any;
  pname : string="";
  pdesc : string="";
  pimg : string="";
  pprice : string="";
  pqty :string="";
  qty : number = 1;
  public test : string="mohini";
  public message = "";
  @Output() public productDataEvent = new EventEmitter();

  constructor(
    private authService : AuthenticationService,
    private productService : ProductService,
    private router : Router,
    private pCartData : CartService,
    private toast : HotToastService
    ) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(
      data=>{
        this.product = data.map((p:any)=>{
          return{
            id:p.payload.doc.id,
            pname:p.payload.doc.data()['P_name'],
            pdesc:p.payload.doc.data()['P_desc'],
            pimg:p.payload.doc.data()['P_img'],
            pprice:p.payload.doc.data()['P_price'],
            pqty:p.payload.doc.data()['P_qty']
          };
        })
      }
    )
  }

  fireEvent(fun:any){
    this.productDataEvent.emit(fun);
  }

  getProductID(pdata:any,qty:number){
    
    //converting Object into Array 
    const arr = Object.keys(pdata).map(index=>{
      let prodataarr = pdata[index];
      return prodataarr;
    });
    //prints data on btn click
    // console.log(arr);
    window.alert(arr[1]+" added to cart!");
    // this.router.navigate(['/cart']);
    //sending the data to cart
    this.pCartData.sendProductData(pdata,qty);
    return pdata;
  }
}

