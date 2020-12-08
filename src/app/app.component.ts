import { Component } from '@angular/core';
import { PhotoService } from './services/photo.service'
import { Photo } from './model/photo.model'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech-app';

  photos: Photo[] = [];
  current: Photo[] = [];
  subscription: Subscription;
  currentPagePhotos: Photo[] = [];
  pageIndex;
  pageSize;
  
  constructor(private photoService : PhotoService) {
    this.photoService.getPhotos().subscribe(photos => {
      this.photos = photos;
      this.updateCurrentPagePhotos();
    })
  }

  onPageEvent({pageIndex, pageSize}) {
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.updateCurrentPagePhotos();
  }

  updateCurrentPagePhotos() {
    let startIndex = this.pageIndex * this.pageSize;
    let endIndex = startIndex + this.pageSize
    this.currentPagePhotos = [...this.photos].slice(startIndex, endIndex)
  }
}