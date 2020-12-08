import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { PhotoService } from './photo.service';
import { Photo } from '../model/photo.model';
import { defer } from 'rxjs';


export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

const expectedPhotos: Photo[] = [{ id : 1, title : "", url : "url1", albumId : 1, thumbnailUrl : "url1"}]

describe('PhotoService', () => {
  let service: PhotoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [PhotoService]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should to fetch photos ', () => {
    service.getPhotos().subscribe((photos) =>{
      expect(photos).toEqual(expectedPhotos)
    });

    const req = httpTestingController.expectOne(`http://jsonplaceholder.typicode.com/photos`);

    req.flush(expectedPhotos);

    httpTestingController.verify();
  });

});
