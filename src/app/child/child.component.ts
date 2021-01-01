import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
@Input() PData: number;
@Output() childEvent = new EventEmitter();
  constructor() { }
  
  ngOnInit(): void {
  }
onChange(value) { this.childEvent.emit(value); }

}
