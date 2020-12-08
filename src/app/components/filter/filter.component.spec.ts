import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoService } from 'src/app/services/photo.service';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;  
  let photoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        FilterComponent,
        PhotoService
      ]
    })
    .compileComponents();

    photoService = TestBed.inject(PhotoService)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onFilterTextChangee to update filter text value', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input');
    nameInput.value = "filterText"
    const button = hostElement.querySelector('.filter-btn');

    spyOn(photoService, 'setFilterText');

    button.click();

    fixture.detectChanges();

    expect(photoService.setFilterText).toHaveBeenCalled()
  });
});
