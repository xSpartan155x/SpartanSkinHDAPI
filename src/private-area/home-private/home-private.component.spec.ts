import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePrivateComponent } from './home-private.component';

describe('HomePrivateComponent', () => {
  let component: HomePrivateComponent;
  let fixture: ComponentFixture<HomePrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePrivateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
