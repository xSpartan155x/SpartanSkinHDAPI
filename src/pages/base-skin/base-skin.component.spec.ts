import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSkinComponent } from './base-skin.component';

describe('BaseSkinComponent', () => {
  let component: BaseSkinComponent;
  let fixture: ComponentFixture<BaseSkinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseSkinComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
