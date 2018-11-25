import {Component, EventEmitter, OnInit} from '@angular/core';
import { EventModel} from "../../../../assets/event.model";
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  isOpen = false;

  // actions1 = new EventEmitter<string|MaterializeAction>();

  // open() {
  //   this.actions1.emit({action: "collapsible", params: ['open', 0]});
  // }

  model = new EventModel("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel mattis augue. Suspendisse varius lacus elit, vel pellentesque velit mollis quis. Donec congue id massa eu molestie. Morbi at massa vel lorem rutrum faucibus. Vivamus at nisi id nisi mollis pellentesque sit amet at nisi. Pellentesque interdum lorem nulla, ut varius lacus feugiat a. Integer dignissim enim at nunc laoreet fringilla. Proin nec malesuada dolor, non vehicula ex. Etiam facilisis aliquam lorem sed blandit. Nulla mi sem, suscipit id mollis vel, ornare ac lacus.", "Lorem Ipsum", "20.11.2018", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at consequat neque. In mollis luctus sem, at aliquam turpis. Quisque et est tortor. Fusce tempus ligula justo, et semper lacus suscipit at. Cras felis arcu, mattis nec ultrices sit amet, facilisis sit amet risus. Nunc posuere ipsum quis facilisis sagittis. Quisque egestas diam sit amet porttitor ullamcorper. Nullam nec ligula venenatis nisl auctor maximus ac vel metus. Curabitur at justo feugiat, convallis sapien a, faucibus dolor. Nullam tempus metus et porttitor volutpat. Proin ut congue sapien.\n" +
    "\n" +
    "Praesent laoreet nunc dolor, eu ultricies odio volutpat ut. Nulla mauris libero, rutrum a leo id, elementum vehicula nisi. Mauris nisi arcu, congue id orci et, vestibulum blandit turpis. Ut a mattis turpis, vitae porta purus. Donec nulla odio, ornare sit amet neque eget, accumsan feugiat nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut ut venenatis neque. Proin vel rhoncus augue. Curabitur auctor ipsum vel ligula lobortis, at posuere lacus maximus. Ut sed neque id massa feugiat dapibus quis dignissim lacus. Phasellus feugiat, augue sit amet mattis efficitur, felis ante luctus turpis, sed interdum ipsum ipsum sagittis mi.\n" +
    "\n" +
    "Sed lobortis scelerisque sapien, ac hendrerit libero. Vivamus eget sapien non quam pretium sollicitudin at a turpis. Donec tempor nulla turpis, sed imperdiet neque ultrices id. Morbi nibh arcu, bibendum eget est non, laoreet accumsan massa. Nulla non velit id orci feugiat sollicitudin sit amet et quam. Etiam libero diam, ultrices eu tincidunt eget, porttitor non nulla. Proin pharetra dolor ut eros auctor tristique. Donec elementum tempor nisi, id sodales sapien convallis eu. Aliquam sodales eget justo et auctor. Integer nec malesuada ipsum. Quisque sollicitudin lectus a lacus auctor, a aliquet mauris iaculis. In dictum quam quis consequat consectetur. Integer cursus metus erat, ut aliquam quam consequat non. Suspendisse blandit nisl non lectus sagittis, ac faucibus nunc mollis.\n" +
    "\n" +
    "Curabitur iaculis consequat ex vitae fermentum. Sed ultrices aliquet hendrerit. Donec massa lacus, hendrerit sit amet dolor quis, pharetra condimentum leo. Aliquam et ex nibh. Donec molestie, dui in bibendum laoreet, sem quam consequat nibh, dignissim interdum nulla nisi id mi. Quisque finibus at quam eget dignissim. Nunc varius, enim non mollis varius, ante risus bibendum ligula, ac scelerisque lorem diam non risus. Curabitur malesuada finibus feugiat. Nunc sed imperdiet magna. Sed quis lacus accumsan, vestibulum magna faucibus, sollicitudin arcu. Nam tempus elementum egestas. In sagittis ac nunc sed convallis. Proin id est ut quam sollicitudin mollis vitae eget est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
    "\n" +
    "Maecenas non ligula eu ante tempus pretium ac non lorem. Nulla non dictum felis. Suspendisse a erat sodales, dictum tortor quis, convallis arcu. Praesent suscipit nec felis eu scelerisque. Nulla nec ex pulvinar, consectetur enim eu, eleifend lectus. Duis sit amet dolor sodales, faucibus ipsum eu, luctus mauris. Aenean ut libero ultrices, iaculis risus rhoncus, condimentum augue. Duis suscipit turpis dapibus tincidunt facilisis. Praesent ac feugiat justo, sed finibus diam.");
  constructor() { }

  ngOnInit() {
  }

}
