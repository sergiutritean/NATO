import {Component, EventEmitter, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  @Input() event;

  ngOnInit() {
    console.log(this.event);
  }

  manevra() {
    window.location = this.event.link;
  }
}
