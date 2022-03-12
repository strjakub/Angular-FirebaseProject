import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() flag!: boolean;
  @Output() add = new EventEmitter();
  public title:string = 'MENU';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddDish(){
    this.add.emit();
  }

}
