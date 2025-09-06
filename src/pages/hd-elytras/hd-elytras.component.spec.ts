import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HDElytrasComponent } from './hd-elytras.component';

describe('HDElytrasComponent', () => {
  let component: HDElytrasComponent;
  let fixture: ComponentFixture<HDElytrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HDElytrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HDElytrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
