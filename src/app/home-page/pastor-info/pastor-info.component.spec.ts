import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastorInfoComponent } from './pastor-info.component';

describe('PastorInfoComponent', () => {
  let component: PastorInfoComponent;
  let fixture: ComponentFixture<PastorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastorInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
