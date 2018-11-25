export class EventModel {

  public extra: any;
  public link: string;
  public src: string;
  public title: string;
  public closing_date: Date;

  constructor(extra: any, title: string, link: string, src: string, closing_date: Date) {
    this.extra = extra;
    this.title = title;
    this.closing_date = closing_date;
    this.src = src;
    this.link = link;
  }
}



