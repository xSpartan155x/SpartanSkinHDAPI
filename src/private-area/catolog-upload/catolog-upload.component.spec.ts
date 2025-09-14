import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatologUploadComponent } from './catolog-upload.component';

describe('CatologUploadComponent', () => {
  let component: CatologUploadComponent;
  let fixture: ComponentFixture<CatologUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatologUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatologUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
