import { Injectable } from '@angular/core';
import { per } from '../per-model';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {
  perCollection: AngularFirestoreCollection<per>;
  perDoc!: AngularFirestoreDocument<per>;
  per:Observable<any[]>;
  id:string = '';

  constructor(public afs: AngularFirestore) {
    this.perCollection = this.afs.collection('persistance');
    this.per = this.afs.collection('persistance').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as per;
        data.id = a.payload.doc.id;
        this.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getPersistance(){
    return this.per;
  }

  updatePersistance(persistance: per){
    this.perDoc = this.afs.doc(`persistance/${this.id}`);
    this.perDoc.update(persistance);
  }
}
