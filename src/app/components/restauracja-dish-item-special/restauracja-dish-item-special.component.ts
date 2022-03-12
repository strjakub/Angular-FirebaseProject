import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from 'src/app/menu-model';
import { DishService } from 'src/app/services/dish.service';
import { CartService } from 'src/app/services/cart.service';
import { Cartposition } from 'src/app/cartposition-model';
import { MemoryService } from 'src/app/services/memory.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-restauracja-dish-item-special',
  templateUrl: './restauracja-dish-item-special.component.html',
  styleUrls: ['./restauracja-dish-item-special.component.css']
})
export class RestauracjaDishItemSpecialComponent implements OnInit {
  @Output() x = new EventEmitter();
  @Input() dish!: Dish;
  public cart:Cartposition[] = [];
  public dishes: Dish[] = [];
  public counter:number = 0;
  public prize: number = 0;
  public mark:string = '$';
  public rating:number = 0;

  constructor(private router: Router, private dishService: DishService, 
    private cartService: CartService, private mem: MemoryService, public userService: UserService) { }

  ngOnInit(): void {
    this.dishService.getDishes().subscribe(items => {
      this.dishes = items;
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

  onDelete(dish:Dish, counter:number): void{
    this.mem.getMemory().forEach((element,index)=>{
      if(element.id == this.dish.id) this.mem.getMemory().splice(index, 1);
    })
    this.cartService.sum = this.cartService.sum - counter * dish.price;
    for (let i = 0; i < counter; i++) {
      this.dishService.counter -= 1;
    }
    this.dishService.deleteDish(this.dish);
  }

  modify(){
    this.x.emit();
    window.scroll(0, 150);
  }
}
