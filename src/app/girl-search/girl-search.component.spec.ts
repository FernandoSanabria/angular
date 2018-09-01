import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlSearchComponent } from './girl-search.component';

describe('GirlSearchComponent', () => {
  let component: GirlSearchComponent;
  let fixture: ComponentFixture<GirlSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
