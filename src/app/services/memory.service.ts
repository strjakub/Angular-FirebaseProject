import { Injectable } from '@angular/core';
import { Memory } from '../memory-model';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {
  memory:Memory[] = [];

  constructor() { }

  getMemory(){
    return this.memory;
  }
}
