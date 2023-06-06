import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildShipComponent } from './child-ship.component';

describe('ChildShipComponent', () => {
  let component: ChildShipComponent;
  let fixture: ComponentFixture<ChildShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildShipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
