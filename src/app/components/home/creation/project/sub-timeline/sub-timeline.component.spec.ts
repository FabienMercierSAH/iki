import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTimelineComponent } from './sub-timeline.component';

describe('SubTimelineComponent', () => {
  let component: SubTimelineComponent;
  let fixture: ComponentFixture<SubTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
