import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   myArray : any[] =  [];
   pid: any;

  constructor(private fs: AngularFirestore) {

    
    // this.fs
    // .collection("Products")
    // .get()
    // .subscribe((ss)=>{
    //   ss.docs.forEach((doc)=>{
    //     this.myArray.push(doc.data());
    //   });
    // });

    // this.pid = this.fs.collection('Products').snapshotChanges().pipe(
    //   map(actions => actions.map(a=>{
    //     const id = a.payload.doc.id;
    //     return id;
    //   }))
    // );

   }
   getdocId(){
    
  }


   getProducts(){
     return this.fs.collection('Products').snapshotChanges();
    //  this.myArray;
   }

   getProductId(){
     return this.pid;
   }

   

}

