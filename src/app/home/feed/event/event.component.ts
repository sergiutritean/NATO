import {Component, EventEmitter, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  @Input() event;
  @Input() key;

  color: string;

  ngOnInit() {
    this.color = (this.key === 'mnap'?'#118ACB':'#118ACB');
  }

  manevra() {
    window.location = this.event.link;
  }
}
