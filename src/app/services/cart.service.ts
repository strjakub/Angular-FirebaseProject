import { Injectable } from '@angular/core';
import { Cartposition } from '../cartposition-model';
import { DishService } from './dish.service';
import { Dish } from '../menu-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cartposition[] = [];
  sum: number = 0;
  dishes!: Dish[];

  constructor(public dishService: DishService) {
    this.dishService.getDishes().subscribe(items => {
      this.dishes = items;
    })
  }

  getCart(): Cartposition[]{
    return this.cart;
  }
}
