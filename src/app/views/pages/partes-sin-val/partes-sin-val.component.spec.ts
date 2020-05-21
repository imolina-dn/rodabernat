import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartesSinValComponent } from './partes-sin-val.component';

describe('PartesSinValComponent', () => {
  let component: PartesSinValComponent;
  let fixture: ComponentFixture<PartesSinValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartesSinValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartesSinValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
