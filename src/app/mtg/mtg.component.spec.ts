import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgComponent } from './mtg.component';

describe('MtgComponent', () => {
  let component: MtgComponent;
  let fixture: ComponentFixture<MtgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MtgComponent]
    });
    fixture = TestBed.createComponent(MtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
