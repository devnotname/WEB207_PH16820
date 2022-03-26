import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoosterComponent } from './footer.component';

describe('FoosterComponent', () => {
  let component: FoosterComponent;
  let fixture: ComponentFixture<FoosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
