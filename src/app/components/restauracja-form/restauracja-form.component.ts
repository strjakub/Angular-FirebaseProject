import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/services/dish.service';
import { Dish } from 'src/app/menu-model';
import { Cartposition } from 'src/app/cartposition-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-restauracja-form',
  templateUrl: './restauracja-form.component.html',
  styleUrls: ['./restauracja-form.component.css']
})
export class RestauracjaFormComponent implements OnInit {
  regex : RegExp = /^[0-9]/;
  pom = '';
  adding:boolean = true;
  special:string = '';

  nazwa = '';
  ilosc:number = 0;
  cena:number = 0;
  opis = '';
  cuisine = '';
  type = '';
  category = '';
  tab:string[] = [];
  foto:string[] = [];
  link = '';

  public dishes: Dish[] = [];
  public cart: Cartposition[] = [];
  public counter: number = 0;
  cuisines = [
    {name: 'POLSKA'},
    {name: 'WŁOSKA'},
    {name: 'FRANCUSKA'},
    {name: 'GRUZIŃSKA'},
    {name: 'AMERYKAŃSKA'},
    {name: 'JAPOŃSKA'},
    {name: 'PORTUGALSKA'},
    {name: 'MEKSYKAŃSKA'},
    {name: 'HISZPAŃSKA'},
    {name: 'MIĘDZYNARODOWA'}
  ];
  types = [
    {name: 'wege'},
    {name: 'wegetariańskie'},
    {name: 'mięsne'}
  ];
  categories = [
    {name: 'zupa'},
    {name: 'danie główne'},
    {name: 'przystawka'},
    {name: 'sałatka'},
    {name: 'kolacja'},
    {name: 'śniadanie'},
    {name: 'deser'}
  ]

  constructor(private dishService: DishService, private cartService: CartService) { }

  ngOnInit(): void {
    this.dishService.getDishes().subscribe(items => {
      this.dishes = items;
    })
    this.cart = this.cartService.getCart();
  }

  onSubmit() : void {
    if(this.adding){
      let dish = {name:this.nazwa, price:this.cena, description:this.opis, limit:this.ilosc, category:this.category,
        type:this.type, cuisine:this.cuisine, ingredients:this.tab, foto:this.foto, link:this.link, rating:0, no_ratings:0, can_rate: [], rated: []};
      this.dishService.addDish(dish);
      this.zero();
    }
    if(!this.adding){
      let dish = {id:this.special, name:this.nazwa, price:this.cena, description:this.opis, limit:this.ilosc, category:this.category,
        type:this.type, cuisine:this.cuisine, ingredients:this.tab, foto:this.foto, link:this.link, rating:0, no_ratings:0, can_rate: [], rated: []};
      this.dishService.updateDish(dish);
      this.special = '';
      this.zero();
      this.adding = true;
      this.counter = 0;
    }
  }

  addIngredient() {
    if(this.counter < 5){
      this.tab.push(this.pom);
      this.pom = '';
      this.counter = this.counter + 1;
    }
  }

  zero(){
    this.nazwa = '';
    this.ilosc = 0;
    this.cena = 0;
    this.opis = '';
    this.cuisine = '';
    this.type = '';
    this.category = '';
    this.tab = [];
    this.foto = [];
    this.link = '';
    this.counter = 0;
  }

  remove(i:number){
    this.counter = this.counter - 1;
    this.tab.splice(i, 1);
  }

  modifing(dish:Dish){
    this.special = dish.id;

    this.adding = false;
    this.nazwa = dish.name;
    this.ilosc = dish.limit;
    this.cena = dish.price;
    this.opis = dish.description;
    this.cuisine = dish.cuisine.toLocaleUpperCase();
    this.type = dish.type.toLocaleLowerCase();
    this.category = dish.category;
    this.tab = dish.ingredients;
    this.foto = dish.foto;
    this.link = '';
    this.counter = this.counter + dish.ingredients.length;
  }

  addform(){
    this.adding = true;
    this.zero();
  }
}
