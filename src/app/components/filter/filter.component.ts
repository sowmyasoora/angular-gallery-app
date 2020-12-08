import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterText: string = '';

  constructor(private photoService : PhotoService) { }

  ngOnInit(): void {
  }

  onFilterTextChange() {
    this.photoService.setFilterText(this.filterText)
  }


}
