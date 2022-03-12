import { Component, OnInit, Testability } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { Cartposition } from 'src/app/cartposition-model';
import { CartService } from 'src/app/services/cart.service';
import { Dish } from 'src/app/menu-model';
import { MemoryService } from 'src/app/services/memory.service';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/comment-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-restauracja-detail-view',
  templateUrl: './restauracja-detail-view.component.html',
  styleUrls: ['./restauracja-detail-view.component.css']
})
export class RestauracjaDetailViewComponent implements OnInit {
  public dish:Dish = {name: '', limit: 0,price: 0,description: '',cuisine: '',type: '',category: '',ingredients: [],foto: [],link: '',rating: 0,no_ratings: 0, can_rate:[], rated:[]};
  public cart:Cartposition[] = [];
  public comments:Comment[] = [];
  public dishes!: any[];
  public counter:number = 0;
  public prize: number = 0;
  public mark:string = '$';
  public rating:number = 0;
  public fotoCounter = 0;

  public nick:string = '';
  public title:string = '';
  public date:string = '';
  public comment:string = '';
  public errors:string[] = ["Błędy w formularzu:"];
  public regex:RegExp = /^[0-3][0-9]-[0-1][0-9]-[0-9][0-9][0-9][0-9]$/;

  constructor(private dishService: DishService, private route: ActivatedRoute, private router: Router,
    private cartService: CartService, private mem: MemoryService, private commentService: CommentService, public userService: UserService) { }

  ngOnInit(): void {
    const idd = this.route.snapshot.paramMap.get('id');
    this.dishService.getDishes().subscribe(items => {
      this.dishes = items;
      this.dishes.forEach((element,index) =>{
        if(idd == element.id){
          this.dish = element;
        }
      })
      this.prize = this.dish.price;
      this.mem.getMemory().forEach((element,index)=>{
        if(element.id == this.dish.id){
          this.counter = element.number;
          this.rating = element.rating;
        }
      })
      this.comments = this.commentService.comments;
    })
    this.cart = this.cartService.getCart();
  }

  goBack(){
    this.router.navigate(['/dishes']); 
  }

  right(){
    this.fotoCounter += 1;
    if(this.fotoCounter >= this.dish.foto.length)
      this.fotoCounter -= this.dish.foto.length; 
  }

  left(){
    this.fotoCounter -= 1;
    if(this.fotoCounter < 0)
      this.fotoCounter += this.dish.foto.length; 
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

  isIn(id:string, tab:string[]){
    let flag = false;
    tab.forEach(element => {
      if(element === id){
        flag = true;
      }
    })
    return flag;
  }

  function1(){
    if(!this.isIn(this.userService.id, this.dish.can_rate)){
      alert('tylko kupujący moga oceniać');
    }else if(this.isIn(this.userService.id, this.dish.rated)){
      alert('już oceniłeś to danie');
    }
    else{
      let flag = true;
      this.mem.getMemory().forEach((element,index)=>{
        if(element.id == this.dish.id){
          element.rating = 1;
          flag = false;
        }
      })
      if(flag)
        this.mem.getMemory().push({id:this.dish.id, number: 0, rating: 1});
      this.rating = 1;
      this.dish.rating += 1;
      this.dish.no_ratings += 1;
      this.dishService.updateDish(this.dish);
      //==================================
      let x = this.dish;
      x.rated.push(this.userService.id);
      this.dishService.updateDish(x);
    }
  }
  function2(){
    if(!this.isIn(this.userService.id, this.dish.can_rate)){
      alert('tylko kupujący moga oceniać');
    }else if(this.isIn(this.userService.id, this.dish.rated)){
      alert('już oceniłeś to danie');
    }
    else{
      let flag = true;
      this.mem.getMemory().forEach((element,index)=>{
        if(element.id == this.dish.id){
          element.rating = 2;
          flag = false;
        }
      })
      if(flag)
        this.mem.getMemory().push({id:this.dish.id, number: 0, rating: 2});
      this.rating = 2;
      this.dish.rating += 2;
      this.dish.no_ratings += 1;
      this.dishService.updateDish(this.dish);
      //==================================
      let x = this.dish;
      x.rated.push(this.userService.id);
      this.dishService.updateDish(x);
    }
  }
  function3(){
    if(!this.isIn(this.userService.id, this.dish.can_rate)){
      alert('tylko kupujący moga oceniać');
    }else if(this.isIn(this.userService.id, this.dish.rated)){
      alert('już oceniłeś to danie');
    }
    else{
      let flag = true;
      this.mem.getMemory().forEach((element,index)=>{
        if(element.id == this.dish.id){
          element.rating = 3;
          flag = false;
        }
      })
      if(flag)
        this.mem.getMemory().push({id:this.dish.id, number: 0, rating: 3});
      this.rating = 3;
      this.dish.rating += 3;
      this.dish.no_ratings += 1;
      this.dishService.updateDish(this.dish);
      //==================================
      let x = this.dish;
      x.rated.push(this.userService.id);
      this.dishService.updateDish(x);
    }
  }
  function4(){
    if(!this.isIn(this.userService.id, this.dish.can_rate)){
      alert('tylko kupujący moga oceniać');
    }else if(this.isIn(this.userService.id, this.dish.rated)){
      alert('już oceniłeś to danie');
    }
    else{
      let flag = true;
      this.mem.getMemory().forEach((element,index)=>{
        if(element.id == this.dish.id){
          element.rating = 4;
          flag = false;
        }
      })
      if(flag)
        this.mem.getMemory().push({id:this.dish.id, number: 0, rating: 4});
      this.rating = 4;
      this.dish.rating += 4;
      this.dish.no_ratings += 1;
      this.dishService.updateDish(this.dish);
      //==================================
      let x = this.dish;
      x.rated.push(this.userService.id);
      this.dishService.updateDish(x);
    }
  }
  function5(){
    if(!this.isIn(this.userService.id, this.dish.can_rate)){
      alert('tylko kupujący moga oceniać');
    }else if(this.isIn(this.userService.id, this.dish.rated)){
      alert('już oceniłeś to danie');
    }
    else{
      let flag = true;
      this.mem.getMemory().forEach((element,index)=>{
        if(element.id == this.dish.id){
          element.rating = 5;
          flag = false;
        }
      })
      if(flag)
        this.mem.getMemory().push({id:this.dish.id, number: 0, rating: 5});
      this.rating = 5;
      this.dish.rating += 5;
      this.dish.no_ratings += 1;
      this.dishService.updateDish(this.dish);
      //==================================
      let x = this.dish;
      x.rated.push(this.userService.id);
      this.dishService.updateDish(x);
    }
  }

  addComment(){
    this.errors = ["Błędy w formularzu:"];
    if(this.nick === '')
      this.errors.push("Trzeba podać NICK");
    if(this.title === '')
      this.errors.push("Trzeba podać TITLE");
    
    if(this.date !== ''){
      if(!this.regex.test(this.date))
        this.errors.push("DATE ma zły format");
      else{
        if(Number(this.date.slice(0,2)) > 31 || Number(this.date.slice(0,2)) == 0 || Number(this.date.slice(3,5)) > 12 || Number(this.date.slice(3,5)) == 0)
          this.errors.push("DATE ma zły format");
      }
    }

    if(this.comment.length < 50)
      this.errors.push("COMMENT jest za krótki");
      if(this.comment.length > 500)
      this.errors.push("COMMENT jest za długi");

    if(this.errors.length <= 1){
      this.comments.push({id:this.dish.id, nick:this.nick, title:this.title, date:this.date , description:this.comment})
      this.nick = '';
      this.title = '';
      this.date = '';
      this.comment = '';
    }
  }

  isManager(): Boolean{
    let flag = false;
    this.userService.x.forEach(element => {
      if(element.id == this.userService.id){
        flag = element.manager;
      }
    })
    return flag;
  }
}
