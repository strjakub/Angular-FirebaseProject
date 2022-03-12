import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map } from 'rxjs';
import { Observable, take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from '../user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public users:User[] = [];

  constructor(public userService:UserService, public auth: AngularFireAuth, public router:Router){
    this.userService.getUsers().subscribe(items =>{
      this.users = items;
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.authState.pipe(
        map(user => {
          if (user === null){
            alert("Musisz być zalogowany!");
            this.router.navigate(['login']);
            return false;
          }
          const routeRoles = route.data && route.data['roles'];
          const userData = user;
          this.userService.getUsers().subscribe(() => {
            if (!this.userService.checkRole(userData.email, routeRoles)) {
              this.router.navigate(['main']);
              return false;
            }
          return true;
          })
          return true;
          }
        )
        )
    }
}
