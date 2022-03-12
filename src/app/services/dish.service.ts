import { Injectable } from '@angular/core';
import { Dish } from '../menu-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  dishCollection: AngularFirestoreCollection<Dish>;
  dishes: Observable<any[]>;
  dishDoc!: AngularFirestoreDocument<Dish>;
  counter:number = 0;
  page:number = 0;
  amount:number = 3;

  constructor(public afs: AngularFirestore) {
    this.dishCollection = this.afs.collection('products');
    this.dishes = this.afs.collection('products').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Dish;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }

  getDishes(){
    return this.dishes;
  }
  
  addDish(dish: Dish){
    this.dishCollection.add(dish);
  }

  deleteDish(dish: Dish){
    this.dishDoc = this.afs.doc(`products/${dish.id}`);
    this.dishDoc.delete();
  }

  updateDish(dish: Dish){
    this.dishDoc = this.afs.doc(`products/${dish.id}`);
    this.dishDoc.update(dish);
  }

  getDish(id: any){
    this.dishDoc = this.afs.doc(`products/${id}`);
    return this.dishDoc;
  }
}
