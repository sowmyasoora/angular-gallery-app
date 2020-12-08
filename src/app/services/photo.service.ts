import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Photo } from '../model/photo.model';
const GET_ALL_PHOSTOS_URL = `${environment.apiBaseUrl}photos`;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  private photos : Photo[];
  private filterText;
  private photosLoaded = new Subject<any>();
  private filteredPhotos;

  constructor(private httpClient: HttpClient) { 
    this.loadPhotos();
  }


  loadPhotos() {
    return this.httpClient.get(GET_ALL_PHOSTOS_URL).subscribe((photos: Photo[]) => {
      this.photos = photos;
      this.filteredPhotos = photos;
      this.sendNotification();
    })
  }

  getPhotos() {
    return this.photosLoaded.asObservable();
  }

  setFilterText(filterText) {
    this.filterText = filterText ? filterText : '';
    this.filteredPhotos = [...this.photos].filter((photo) => photo.title? photo.title.includes(this.filterText) : false)
    this.sendNotification();
  }

  sendNotification() {
    this.photosLoaded.next(this.filteredPhotos)
  }

}
