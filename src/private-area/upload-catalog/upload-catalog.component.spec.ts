import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCatalogComponent } from './upload-catalog.component';

describe('UploadCatalogComponent', () => {
  let component: UploadCatalogComponent;
  let fixture: ComponentFixture<UploadCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
