import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { PersistanceService } from 'src/app/services/persistance.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user-model';
import { per } from 'src/app/per-model';

@Component({
  selector: 'app-restauracja-container',
  templateUrl: './restauracja-container.component.html',
  styleUrls: ['./restauracja-container.component.css']
})
export class RestauracjaContainerComponent implements OnInit {
  users: User[] = [];
  persistance: per[] = [];

  constructor(public userService: UserService, public auth: AngularFireAuth, public per: PersistanceService) {
    this.userService.getUsers().subscribe(items => {
      this.users = items;
      this.auth.authState.subscribe(res => {
        if (res && res.uid) {
          userService.uid = res.uid;
          userService.isLogged = true;
          this.users.forEach(element=>{
            if(element.mail == res.email){
              this.userService.id = element.id;
              let pom = element.mail;
              for(let i=0; i<pom.length; i++){
                if(pom[i] === '@')
                  this.userService.nick = pom.slice(0, i);
              }
            }
          })
        } else {
          userService.isLogged = false;
          this.userService.id = '';
          this.userService.nick = '';
        }
      });
    })
    this.userService.getUsers().subscribe(element => {
      this.users = element;
    });
    this.per.getPersistance().subscribe(items => {
      this.persistance = items;
      if(this.persistance[0].persistance == 0)
        this.auth.setPersistence('none');
      if(this.persistance[0].persistance == 1)
        this.auth.setPersistence('local');
      if(this.persistance[0].persistance != 0 && this.persistance[0].persistance != 1)
        this.auth.setPersistence('session');
    });
   }

  ngOnInit(): void {
  }

  isManager(): Boolean{
    let flag = false;
    this.users.forEach(element => {
      if(element.id == this.userService.id){
        flag = element.manager;
      }
    })
    return flag;
  }

  isAdmin(): Boolean{
    let flag = false;
    this.users.forEach(element => {
      if(element.id == this.userService.id){
        flag = element.admin;
      }
    })
    return flag;
  }
}
