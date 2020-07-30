import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulCSaleComponent } from './resul-csale.component';

describe('ResulCSaleComponent', () => {
  let component: ResulCSaleComponent;
  let fixture: ComponentFixture<ResulCSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResulCSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResulCSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
