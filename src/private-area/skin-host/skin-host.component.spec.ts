import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinHostComponent } from './skin-host.component';

describe('SkinHostComponent', () => {
  let component: SkinHostComponent;
  let fixture: ComponentFixture<SkinHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkinHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
