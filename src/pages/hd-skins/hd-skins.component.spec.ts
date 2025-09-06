import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HDSkinsComponent } from './hd-skins.component';

describe('HDSkinsComponent', () => {
  let component: HDSkinsComponent;
  let fixture: ComponentFixture<HDSkinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HDSkinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HDSkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
