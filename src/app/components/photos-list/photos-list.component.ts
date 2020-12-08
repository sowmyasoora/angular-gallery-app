import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../model/photo.model';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  @Input() photos : Photo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
