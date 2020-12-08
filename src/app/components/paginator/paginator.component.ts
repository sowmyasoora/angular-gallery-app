import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
 
export class PaginationEvent {
  pageIndex: number
  pageSize : number
}

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() length: number;
  pageIndex: number = 0;
  pageSize:number = 10;
  pageSizeOptions : number[] = [10, 15, 20];

  currentStartIndex: number;
  currentEndIndex: number;

  @Output() pageEvent = new EventEmitter<PaginationEvent>();

  constructor() {
  }

  updateIndexes() {
    this.currentStartIndex = this.pageIndex * this.pageSize;
    this.currentEndIndex = (this.pageIndex + 1) * this.pageSize;
  }

  ngOnInit(): void {
    this.sendEvent();
  }

  ngOnChanges(changes: SimpleChanges) {

    if(changes.length.previousValue != changes.length.currentValue) {
      this.pageIndex = 0;
      this.sendEvent();
    }
    
}

  sendEvent() {
    this.updateIndexes();
    this.pageEvent.emit({ pageIndex : this.pageIndex, pageSize : typeof this.pageSize === "string" ? parseInt(this.pageSize) : this.pageSize })
  }

  pageSizeChanged($event) {
    this.sendEvent()
  }

  nextPage() {

    if(this.hasNext()) {
      this.pageIndex++;
      this.sendEvent()
    }
  }

  prevPage() {

    if(this.hasPrev()) {
      this.pageIndex--;
      this.sendEvent()
    }
    
  }

  hasNext() {
    return (this.pageIndex + 1) * this.pageSize <= this.length
  }

  hasPrev() {
    return (this.pageIndex - 1) * this.pageSize >=0;
  }
}
