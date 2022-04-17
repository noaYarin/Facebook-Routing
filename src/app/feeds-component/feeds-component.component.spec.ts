import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsComponentComponent } from './feeds-component.component';

describe('FeedsComponentComponent', () => {
  let component: FeedsComponentComponent;
  let fixture: ComponentFixture<FeedsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
