import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user-model';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { histelement } from '../histelement-model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<any[]>;
  userDoc!: AngularFirestoreDocument<User>;
  nick: string = '';
  id: string = '';
  uid: string = '';
  hist:histelement[] = [];
  isLogged = false;
  x: User[] = [];

  constructor(public afs: AngularFirestore) {
    this.userCollection = this.afs.collection('users');
    this.users = this.afs.collection('users').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.users.subscribe(items =>{
      this.x = items;
    })
  }
  
  getUsers(){
    return this.users;
  }

  addUser(user: User){
    this.userCollection.add(user);
  }

  getUser(){
    this.userDoc = this.afs.doc(`users/${this.id}`);
    return this.userDoc;
  }

  updateUser(user: User){
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.update(user);
  }

  checkRole(mail:string | null, roles:string[]):boolean{
    let flag = false;

      this.x.forEach(element => {
        if(element.mail === mail){
          roles.forEach(element2 => {
            if(element2 === 'admin' && element.admin)
              flag =  true;
            if(element2 === 'manager' && element.manager)
              flag = true;
            if(element2 === 'klient')
              flag = true;
          })
        }
      })
      return flag;
  }

  getHist(){
    this.x.forEach(element4 => {
      if(element4.id == this.id){
        this.hist = element4.hist;
      }
    })
  }
}
