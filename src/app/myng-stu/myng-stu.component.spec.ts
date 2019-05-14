import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyngStuComponent } from './myng-stu.component';

describe('MyngStuComponent', () => {
  let component: MyngStuComponent;
  let fixture: ComponentFixture<MyngStuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyngStuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyngStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
