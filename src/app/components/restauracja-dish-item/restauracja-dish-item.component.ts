import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from 'src/app/menu-model';
import { DishService } from 'src/app/services/dish.service';
import { CartService } from 'src/app/services/cart.service';
import { Cartposition } from 'src/app/cartposition-model';
import { MemoryService } from 'src/app/services/memory.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-restauracja-dish-item',
  templateUrl: './restauracja-dish-item.component.html',
  styleUrls: ['./restauracja-dish-item.component.css']
})
export class RestauracjaDishItemComponent implements OnInit {
  @Input() dish!: Dish;
  public cart:Cartposition[] = [];
  public dishes: Dish[] = [];
  public mini: number = -1;
  public maxi: number = -1;
  public counter:number = 0;
  public prize: number = 0;
  public mark:string = '$';
  public rating:number = 0;

  constructor(private router: Router, private dishService: DishService, 
    private cartService: CartService, private mem: MemoryService, public userService: UserService) { }

  ngOnInit(): void {
    this.dishService.getDishes().subscribe(items => {
      this.dishes = items;
      this.mini = this.getLowest();
      this.maxi = this.getHighest();
    })
    this.cart = this.cartService.getCart();
    this.prize = this.dish.price;
    this.mem.getMemory().forEach((element,index)=>{
      if(element.id == this.dish.id){
        this.counter = element.number;
        this.rating = element.rating;
      }
    })
  }

  onClick1(): void{
    this.dishService.counter += 1;
    let mark = true;
    let flag = true;
    this.mem.getMemory().forEach((element,index)=>{
      if(element.id == this.dish.id){
        element.number += 1;
        flag = false;
      }
    })
    if(flag)
      this.mem.getMemory().push({id:this.dish.id, number: 1, rating: 0});
    this.counter = this.counter + 1;
    this.cartService.sum = this.cartService.sum + parseFloat(this.dish.price.toString());
    this.cart.forEach((element,index)=>{
      if(element.id == this.dish.name){
        this.cart[index].number = this.cart[index].number + 1;
        mark = false;
      }
    })
    if(mark){
      let x = {id: this.dish.name, number: 1}
      this.cart.push(x);
    }
  }

  onClick2(): void{
    this.dishService.counter -= 1;
    this.counter = this.counter - 1;
    this.cartService.sum = this.cartService.sum - this.dish.price;
    this.cart.forEach((element,index)=>{
      if(element.id == this.dish.name && this.cart[index].number != 1){
        this.cart[index].number = this.cart[index].number - 1;
      }else{
        this.cart.forEach((element,index)=>{
          if(element.id == this.dish.name) this.cart.splice(index, 1);
        })
      }
    })
    this.mem.getMemory().forEach((element,index)=>{
      if(element.id == this.dish.id){
        this.mem.getMemory()[index].number = this.mem.getMemory()[index].number - 1;
      }
    })
  }

  onClick3(): void{
    if(this.mark === '$'){
      this.prize = this.prize * 0.88;
      this.mark = '€';
    }
    else{
      this.prize = this.prize / 0.88;
      this.mark = '$';
    }
  }

  jpgClick(){
    if(this.userService.id !== '')
      this.router.navigate([`/dishes/${this.dish.id}`]); 
  }

  getLowest(): number{
    this.mini = -1;
    for (let dish1 of this.dishes){
      if(this.mini > dish1.price || this.mini == -1)
        this.mini = dish1.price;
    }
    return this.mini;
  }

  getHighest(): number{
    this.maxi = -1;
    for (let dish2 of this.dishes){
      if(this.maxi < dish2.price)
        this.maxi = dish2.price;
    }
    return this.maxi;
  }
}
