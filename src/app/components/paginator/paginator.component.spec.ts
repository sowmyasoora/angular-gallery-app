import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorComponent ],
      imports: [
        BrowserAnimationsModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should send notification on change of page size value', () => {
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('#dropdown')).nativeElement;
    spyOn(component, 'sendEvent');

    select.dispatchEvent(new Event('change'));
    
    fixture.detectChanges();

    expect(component.sendEvent).toHaveBeenCalled()

  });

  it('should send notification on next button click', () => {
    const button = fixture.debugElement.query(By.css('#next')).nativeElement;
    spyOn(component, 'sendEvent');

    button.click();
    
    fixture.detectChanges();

    expect(component.sendEvent).toHaveBeenCalled()
  });

  it('should send notification on prev button click', () => {
    const button = fixture.debugElement.query(By.css('#prev')).nativeElement;
    spyOn(component, 'sendEvent');

    button.click();
    
    fixture.detectChanges();

    expect(component.sendEvent).toHaveBeenCalled()
  });

  it('should emit event on sendEvent method call', () => {
    const button = fixture.debugElement.query(By.css('#prev')).nativeElement;
    spyOn(component.pageEvent, 'emit');

    button.click();
    
    fixture.detectChanges();

    expect(component.pageEvent.emit).toHaveBeenCalled()
  });

});
