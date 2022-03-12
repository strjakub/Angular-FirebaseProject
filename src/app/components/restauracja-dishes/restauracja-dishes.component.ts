import { Component, OnInit } from '@angular/core';
import { Dish } from './../../menu-model';
import { DishService } from 'src/app/services/dish.service';
import { CartService } from 'src/app/services/cart.service';
import { Cartposition } from 'src/app/cartposition-model';

@Component({
  selector: 'app-restauracja-dishes',
  templateUrl: './restauracja-dishes.component.html',
  styleUrls: ['./restauracja-dishes.component.css']
})
export class RestauracjaDishesComponent implements OnInit {
  public dishes: Dish[] = [];
  public cart: Cartposition[] = [];
  public sumOfDishes:number = 0;
  public page:number = 0;
  public amount:number = 3;

  constructor(public dishService: DishService, private cartService: CartService) { }

  ngOnInit(): void {
    this.dishService.getDishes().subscribe(items => {
      this.dishes = items;
    })
    this.page = this.dishService.page;
    this.amount = this.dishService.amount;
    this.cart = this.cartService.getCart();
  }

  next():void{
    if(!(this.amount*(this.page+1) >= this.dishes.length))
      this.page = this.page + 1;
      this.dishService.page += 1;
  }

  previous():void{
    if(!(this.page <= 0))
      this.page = this.page - 1;
      this.dishService.page -= 1;
  }

  decrement():void{
    if(!(this.amount <= 1)){
      this.amount = this.amount - 1;
      this.dishService.amount = this.dishService.amount - 1;
      this.page = 0;
      this.dishService.page = 0;
    }
  }

  increment():void{
    if(!(this.amount >= this.dishes.length)){
      this.amount = this.amount + 1;
      this.dishService.amount = this.dishService.amount + 1;
      this.page = 0;
      this.dishService.page = 0;
    }
  }

}
