import {Component, EventEmitter, OnInit, Input} from '@angular/core';
import { EventModel} from "../../../../assets/event.model";
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  isOpen = false;

  @Input() event;
  
  constructor() {
   }

  ngOnInit() {
    console.log(this.event);
  }

  manevra() {
    window.location = this.event.link;
  }
}
