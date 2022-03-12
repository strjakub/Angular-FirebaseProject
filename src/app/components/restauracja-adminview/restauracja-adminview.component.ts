import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { PersistanceService } from 'src/app/services/persistance.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user-model';
import { per } from 'src/app/per-model';

@Component({
  selector: 'app-restauracja-adminview',
  templateUrl: './restauracja-adminview.component.html',
  styleUrls: ['./restauracja-adminview.component.css']
})
export class RestauracjaAdminviewComponent implements OnInit {
  public users: User[] = [];
  public persistance: per[] = [];

  constructor(public userService: UserService, public auth: AngularFireAuth, public perService: PersistanceService) {
    this.userService.getUsers().subscribe(items => {
      this.users = items;
    })
    this.perService.getPersistance().subscribe(items2 => {
      this.persistance = items2;
    })
   }

  ngOnInit(): void {
  }

  ban(id:string){
    this.users.forEach(element2 => {
      if(id == element2.id){
        let x = element2;
        x.isBanned = !x.isBanned;
        this.userService.updateUser(x);
      }
    })
  }

  adminPermission(id:string){
    this.users.forEach(element2 => {
      if(id == element2.id){
        let x = element2;
        x.admin = !x.admin;
        this.userService.updateUser(x);
      }
    })
  }

  managerPermission(id:string){
    this.users.forEach(element2 => {
      if(id == element2.id){
        let x = element2;
        x.manager = !x.manager;
        this.userService.updateUser(x);
      }
    })
  }

  none(){
    this.auth.setPersistence('none');
    this.persistance.forEach(element=>{
      let x = element;
      x.persistance = 0;
      this.perService.updatePersistance(x);
    })
  }

  local(){
    this.auth.setPersistence('local');
    this.persistance.forEach(element=>{
      let x = element;
      x.persistance = 1;
      this.perService.updatePersistance(x);
    })
  }

  session(){
    this.auth.setPersistence('session');
    this.persistance.forEach(element=>{
      let x = element;
      x.persistance = 2;
      this.perService.updatePersistance(x);
    })
  }
}
