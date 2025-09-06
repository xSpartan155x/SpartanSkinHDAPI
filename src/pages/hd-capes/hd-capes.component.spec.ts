import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HDCapesComponent } from './hd-capes.component';

describe('HDCapesComponent', () => {
  let component: HDCapesComponent;
  let fixture: ComponentFixture<HDCapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HDCapesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HDCapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
