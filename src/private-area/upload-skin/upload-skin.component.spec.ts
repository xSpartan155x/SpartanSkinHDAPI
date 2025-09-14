import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSkinComponent } from './upload-skin.component';

describe('UploadSkinComponent', () => {
  let component: UploadSkinComponent;
  let fixture: ComponentFixture<UploadSkinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadSkinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
