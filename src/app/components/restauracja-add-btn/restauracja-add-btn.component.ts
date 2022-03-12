import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-restauracja-add-btn',
  templateUrl: './restauracja-add-btn.component.html',
  styleUrls: ['./restauracja-add-btn.component.css']
})
export class RestauracjaAddBtnComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  @Input() mark!:boolean;

  constructor() { }

  ngOnInit(): void {}

  onClick(){
    this.mark = !this.mark;
    this.btnClick.emit();
  }

}
