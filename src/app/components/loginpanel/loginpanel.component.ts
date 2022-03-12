import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user-model';


@Component({
  selector: 'app-loginpanel',
  templateUrl: './loginpanel.component.html',
  styleUrls: ['./loginpanel.component.css']
})
export class LoginpanelComponent implements OnInit {
  mail = '';
  pass = '';
  show:boolean = false;
  public users!: User[];

  constructor(public auth: AngularFireAuth, public userService: UserService, public router:Router) {
  }

  ngOnInit(): void {
  }

  login() {
    if(this.mail !== '' && this.pass !== ''){
      this.auth.signInWithEmailAndPassword(this.mail, this.pass);
      this.mail = '';
      this.pass = '';
    }
  }
  logout() {
    this.auth.signOut();
    this.userService.id = '';
    this.userService.nick = '';
    this.router.navigate(['main']);
  }

  register() {
    if(this.mail !== '' && this.pass.length >= 6){
      this.auth.createUserWithEmailAndPassword(this.mail, this.pass);
      this.userService.addUser({mail:this.mail, admin:false, manager:false, isBanned:false, hist:[]});
      this.mail = '';
      this.pass = '';
    }
    else{
      alert("błędny mail LUB za słabe hasło, długość dobrego hasła to co najmniej 6 znaków");
    }
  }

  showHist(){
    this.userService.getHist();
    this.show = !this.show;
  }

}
