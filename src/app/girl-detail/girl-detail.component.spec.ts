import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlDetailComponent } from './girl-detail.component';

describe('GirlDetailComponent', () => {
  let component: GirlDetailComponent;
  let fixture: ComponentFixture<GirlDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
