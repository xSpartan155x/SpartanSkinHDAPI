import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCarouselComponent } from './no-carousel.component';

describe('NoCarouselComponent', () => {
  let component: NoCarouselComponent;
  let fixture: ComponentFixture<NoCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
