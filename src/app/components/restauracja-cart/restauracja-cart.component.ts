import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cartposition } from 'src/app/cartposition-model';
import { DishService } from 'src/app/services/dish.service';
import { Dish } from 'src/app/menu-model';
import { MemoryService } from 'src/app/services/memory.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user-model';
import { histelement } from 'src/app/histelement-model';

@Component({
  selector: 'app-restauracja-cart',
  templateUrl: './restauracja-cart.component.html',
  styleUrls: ['./restauracja-cart.component.css']
})
export class RestauracjaCartComponent implements OnInit {
  public cart: Cartposition[] = [];
  public dishes: Dish[] = [];
  public dollar:boolean = true;
  public users:User[] = [];
  public id:String = '';
  sum!:number;

  constructor(public cartService: CartService, public dishService: DishService, public mem: MemoryService, public userService: UserService) { }

  ngOnInit(): void {
    this.dishService.getDishes().subscribe(items => {
      this.dishes = items;
    })
    this.userService.getUsers().subscribe(items2 => {
      this.users = items2;
      this.id = this.userService.id;
    })
    this.sum = this.cartService.sum;
    this.cart = this.cartService.getCart();
  }

  change(){
    this.dollar = !this.dollar;
  }

  buy(){
    this.cart.forEach((element,index)=>{
      this.mem.getMemory().forEach((element3,index3)=>{
        element3.number = 0;
      });
      this.dishes.forEach((element2,index2)=>{
        if(element.id == element2.name){
          this.users.forEach(element4 => {
            if(this.id == element4.id){
              let x:histelement = {name:element.id, amount:element.number, date:(new Date).toLocaleString()};
              let y = element4;
              let mem = this.userService.id;
              let o = element2;
              o.can_rate.push(mem);
              this.dishService.updateDish(o);
              y.hist.push(x);
              this.userService.updateUser(y);
            }
          })
          let z = element2;
          z.limit = z.limit - element.number;
          this.dishService.updateDish(z);
        }
      })
    })
    this.cart = [];
    this.cartService.cart = [];
    this.sum = this.cartService.sum = 0;
    this.dishService.counter = 0;
  }
}
