import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PhotoService } from './services/photo.service';

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FilterComponent } from './components/filter/filter.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PhotosListComponent,
        FilterComponent,
        PaginatorComponent
      ],
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        PhotoService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tech-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tech-app');
  });

});
